import { useState } from 'react';

const OPERATOR_LIST = ['+', '-', '*', '/'];
const EMPTY_STRING = '';
const DIGIT_LIST = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const useExpression = () => {
	const [expression, setExpression] = useState(EMPTY_STRING);
	const [isOperatorAppended, setIsOperatorAppended] = useState(false);

	const clear = () => {
		if (expression.length > 0) {
			setExpression((previousExpression) =>
				previousExpression.slice(0, previousExpression.length - 1)
			);
		}
		setIsOperatorAppended(false);
	};

	const allClear = () => {
		setExpression('');
		setIsOperatorAppended(false);
	};

	const append = (character) => {
		OPERATOR_LIST.map((OPERATOR) => {
			if (character === OPERATOR && expression.length > 0) {
				// append operator only when the last value given is a number
				const lastValue = expression.slice(expression.length - 1);
				DIGIT_LIST.map(
					(DIGIT) =>
						DIGIT === lastValue &&
						(setExpression((previousExpression) =>
							previousExpression.concat(character)
						),
						setIsOperatorAppended(true))
				);
			}
		});

		DIGIT_LIST.map(
			(DIGIT) =>
				character === DIGIT &&
				(setExpression((previousExpression) => previousExpression.concat(character)),
				setIsOperatorAppended(false))
		);
	};

	const updateLastOperator = (operatorList) => {
		const [removedExpression, lastOperator] = [
			expression.slice(0, expression.length - 1),
			expression.slice(expression.length - 1),
		];

		operatorList.map((operator, index) => {
			if (lastOperator === operator) {
				const nextIndex = (index + 1) % operatorList.length;
				const nextOperator = operatorList[nextIndex];

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