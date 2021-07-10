import React, { useContext } from 'react';
import NormalButton from '../NormalButton';
import { useExpressionUpdateContext } from '../../hooks/useExpressionContext';

const EqualButton = () => {
	const { append } = useExpressionUpdateContext();
	return <NormalButton onClick={() => append('=')}>=</NormalButton>;
};

export default EqualButton;