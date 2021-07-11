import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';
import { useExpressionUpdateContext } from '../../hooks/useExpressionContext';
import useOperator from '../../hooks/useOperator';

const OperatorButton = ({ children, operatorList }) => {
	const { append, updateOnceClicked } = useExpressionUpdateContext();
	const { operator, switchOperator } = useOperator(operatorList);

	return (
		<NormalButton
			value={operator}
			onClick={(e) => (
				append(e.target.value), switchOperator(), updateOnceClicked(operatorList)
			)}
		>
			{operator}
		</NormalButton>
	);
};

export default OperatorButton;