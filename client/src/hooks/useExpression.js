import { useState } from 'react';
import {
    EMPTY_STRING,
    DIGIT_LIST,
    OPENING_BRACKET,
    CLOSING_BRACKET,
    OPERATOR_LIST,
    ARITHMETIC_OPERATOR_LIST,
} from '../constants';

const useExpression = () => {
    const [expression, setExpression] = useState([]);
    const [isOperatorAppended, setIsOperatorAppended] = useState(false);

    const clear = () => {
        const expressionLength = expression.length;

        if (expressionLength > 0) {
            const lastIndex = expressionLength - 1;
            const lastTerm = expression[lastIndex];
            const lastTermLength = lastTerm.length;

            if (lastTermLength > 1) {
                const lastTrimmedTerm = lastTerm.slice(0, lastTermLength - 1);
                setExpression((previousExpression) =>
                    previousExpression.slice(0, expressionLength - 1).concat(lastTrimmedTerm)
                );
            } else {
                setExpression((previousExpression) =>
                    previousExpression.slice(0, expressionLength - 1)
                );
            }
        }

        setIsOperatorAppended(false);
    };

    const allClear = () => {
        setExpression([]);
        setIsOperatorAppended(false);
    };

    const append = (character) => {
        const expressionLength = expression.length;
        // character is parenthesis => append to expression(its validation is done in findValidParenthesis)
        // lastElement is number, character is number => append to element
        // lastElement is number, character is operator => append to expression and set IsOperatorAppend to true
        // lastElement is operator, character is number => append to expression and set IsOperatorAppend to false
        // lastElement is closing parenthesis and character is an arithmetic operator => append to element
        // lastElement is operator, character is operator => invalid input, ignored
        const lastElement = expression[expressionLength - 1];

        if (character === OPENING_BRACKET || character === CLOSING_BRACKET) {
            setExpression((previousExpression) => previousExpression.concat(character));
        } else if (Number(lastElement) ^ Number(character)) {
            setExpression((previousExpression) => previousExpression.concat(character));
            const isCharacterOperator = !Number(character);
            setIsOperatorAppended(isCharacterOperator);
        } else if (
            lastElement === CLOSING_BRACKET &&
            isEveryCharacterInList(character)(ARITHMETIC_OPERATOR_LIST)()
        ) {
            setExpression((previousExpression) => previousExpression.concat(character));
        } else if (Number(character) && Number(lastElement)) {
            const lastTermAppended = lastElement.concat(character);
            setExpression((previousExpression) =>
                previousExpression.slice(0, expressionLength - 1).concat(lastTermAppended)
            );
        }
    };

    const updateLastOperator = (operatorList) => {
        const expressionLength = expression.length;
        const [removedExpression, lastOperator] = [
            expression.slice(0, expression.length - 1),
            expression[expressionLength - 1],
        ];

        operatorList.map((operator, index) => {
            if (lastOperator === operator) {
                const nextIndex = (index + 1) % operatorList.length;
                const nextOperator = operatorList[nextIndex];
                console.log(nextOperator);

                setExpression(removedExpression.concat(nextOperator));
            }
        });
    };

    const updateOnceClicked = (operatorList) =>
        isOperatorAppended && updateLastOperator(operatorList);

    const calculateNestingLevel = () =>
        expression.reduce((accumulator, currentCharacter) => {
            if (currentCharacter === OPENING_BRACKET) {
                return accumulator + 1;
            } else if (currentCharacter === CLOSING_BRACKET) {
                return accumulator - 1;
            }
            return accumulator;
        }, 0);

    const findValidParenthesis = () => {
        const lastElement = expression[expression.length - 1]; // set to undefined when empty
        const isLastElementInList = isEveryCharacterInList(lastElement);

        if (
            !expression.length ||
            isLastElementInList(OPERATOR_LIST)((character) => character !== CLOSING_BRACKET)
        ) {
            return OPENING_BRACKET;
        } else if (
            isLastElementInList(DIGIT_LIST.concat(CLOSING_BRACKET))() &&
            countNestingLevel()
        ) {
            return CLOSING_BRACKET;
        }
        return EMPTY_STRING;
    };

    const countNestingLevel = () => {
        return expression.reduce((accumulator, currentElement) => {
            if (currentElement === OPENING_BRACKET) return accumulator + 1;
            else if (currentElement === CLOSING_BRACKET) return accumulator - 1;
            return accumulator;
        }, 0);
    };

    const isEveryCharacterInList = (string) => (list) => (filterFunc) =>
        string
            .split('')
            .every((character) =>
                list.some(
                    (element) => (!filterFunc || filterFunc(character)) && character === element
                )
            );

    const evaluate = () => {};

    return {
        expression,
        clear,
        allClear,
        append,
        evaluate,
        updateOnceClicked,
        findValidParenthesis,
    };
};

export default useExpression;