import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';

const OperatorButton = ({ children, value }) => {
	const { append } = useExpression();
	return (
		<NormalButton value={value} onClick={(e) => append(e.target.value)}>
			{children}
		</NormalButton>
	);
};

export default OperatorButton;