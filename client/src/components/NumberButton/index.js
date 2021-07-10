import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';
import { useExpressionUpdateContext } from '../../hooks/useExpressionContext';

const NumberButton = ({ children, className, value }) => {
	const { append } = useExpressionUpdateContext();

	return (
		<NormalButton className={className} value={value} onClick={(e) => append(e.target.value)}>
			{children}
		</NormalButton>
	);
};

export default NumberButton;