import { useState } from 'react';
import { useExpressionUpdateContext } from './useExpressionContext';

const useOperator = (operatorList) => {
	const [operator, setOperator] = useState(operatorList[0]);

	const { append } = useExpressionUpdateContext();

	const switchOperator = () => {
		operatorList.reduce((isExcuted, operatorInList, index) => {
			if (isExcuted) return true;
			if (!isExcuted && operator === operatorInList) {
				const nextIndex = (index + 1) % operatorList.length;
				const nextOperator = operatorList[nextIndex];
				setOperator(nextOperator);
				return true;
			}
			return false;
		}, false);
	};
	

	const initializeOperator = () => {
		setOperator(operatorList[0]);
	};

	return { operator, switchOperator, initializeOperator };
};

export default useOperator;