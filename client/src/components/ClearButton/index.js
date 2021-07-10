import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';
import { useExpressionUpdateContext } from '../../hooks/useExpressionContext';

const ClearButton = () => {
	const { clear } = useExpressionUpdateContext();
	return <NormalButton onClick={clear}>C</NormalButton>;
};

export default ClearButton;