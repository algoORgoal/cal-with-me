import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';
import { useExpressionUpdateContext } from '../../hooks/useExpressionContext';

const OperatorButton = ({ children, value }) => {
	const { append } = useExpressionUpdateContext();
	return (
		<NormalButton value={value} onClick={(e) => append(e.target.value)}>
			{children}
		</NormalButton>
	);
};

export default OperatorButton;