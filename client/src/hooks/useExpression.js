import { useState } from 'react';

const useExpression = () => {
	const [expression, setExpression] = useState('ㅅㄷㅌㅅ');
	
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
		// setExpression((previousExpression) => previousExpression.concat(character));
		setExpression(character);
	};

	return { expression, clear, allClear, append };
};

export default useExpression;