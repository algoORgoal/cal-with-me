import { useState } from 'react';
import { EMPTY_STRING, DIGIT_LIST } from '../constants';

const useExpression = () => {
    const [expression, setExpression] = useState([]);
    const [isOperatorAppended, setIsOperatorAppended] = useState(false);
    console.log(isOperatorAppended);

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
        // lastTerm is number, character is number => append to lastTerm
        // lastTerm is number, character is operator => append to expression and set IsOperatorAppend to true
        // lastTerm is operator, character is number => append to expression and set IsOperatorAppend to false
        // lastTerm is operator, character is operator => invalid input, ignored
        const lastTerm = expression[expressionLength - 1];

        if (Number(lastTerm) ^ Number(character)) {
            setExpression((previousExpression) => previousExpression.concat(character));
            const isCharacterOperator = !Number(character);
            setIsOperatorAppended(isCharacterOperator);
        }
        if (Number(character) && Number(lastTerm)) {
            const lastTermAppended = lastTerm.concat(character);
            setExpression((previousExpression) =>
                previousExpression.slice(0, expressionLength - 1).concat(lastTermAppended)
            );
        }

        // OPERATOR_LIST.map((OPERATOR) => {
        //     if (character === OPERATOR && expression.length > 0) {
        //         // append operator only when the last value given is a number
        //         const lastValue = expression.slice(expression.length - 1);
        //         DIGIT_LIST.map(
        //             (DIGIT) =>
        //                 DIGIT === lastValue &&
        //                 (setExpression((previousExpression) =>
        //                     previousExpression.concat(character)
        //                 ),
        //                 setIsOperatorAppended(true))
        //         );
        //     }
        // });

        //DIGIT_LIST.DIGIT_LIST.map(
        //  (DIGIT) =>
        //    character === DIGIT &&
        //  (setExpression((previousExpression) => previousExpression.concat(character)),
        //setIsOperatorAppended(false))
        //);
    };

    const updateLastOperator = (operatorList) => {
        const expressionLength = expression.length;
        console.log(expression);
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

    // eval function generates an error for a invalid expression such as: 1+
    const evaluate = () => expression;

    return { expression, clear, allClear, append, evaluate, updateOnceClicked };
};

export default useExpression;