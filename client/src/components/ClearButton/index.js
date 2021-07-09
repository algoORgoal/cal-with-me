import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';

const ClearButton = () => {
	const { clear } = useExpression();
	return <NormalButton onClick={clear}>C</NormalButton>;
};

export default ClearButton;