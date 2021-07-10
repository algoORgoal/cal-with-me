import { useState } from 'react';

const OPERATOR_LIST = ['+', '-', '*', '/'];
const EMPTY_STRING = '';
const DIGIT_LIST = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const useExpression = () => {
	const [expression, setExpression] = useState('');
	console.log(expression);

	const clear = () => {
		if (expression.length > 0) {
			setExpression((previousExpression) =>
				previousExpression.slice(0, previousExpression.length - 1)
			);
		}
	};

	const allClear = () => {
		setExpression('');
	};

	const append = (character) => {
		OPERATOR_LIST.map((OPERATOR) => {
			if (character === OPERATOR && expression.length > 0) {
				// append operator only when the last value given is a number
				const lastValue = expression.slice(expression.length - 1);
				DIGIT_LIST.map(
					(DIGIT) =>
						DIGIT === lastValue &&
						setExpression((previousExpression) => previousExpression.concat(character))
				);
			}
		});

		DIGIT_LIST.map(
			(DIGIT) =>
				character === DIGIT &&
				setExpression((previousExpression) => previousExpression.concat(character))
		);
	};

	return { expression, clear, allClear, append };
};

export default useExpression;