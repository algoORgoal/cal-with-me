import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';

const NumberButton = ({ children, className, value }) => {
	const { append } = useExpression();

	return (
		<NormalButton className={className} value={value} onClick={(e) => append(e.target.value)}>
			{children}
		</NormalButton>
	);
};

export default NumberButton;