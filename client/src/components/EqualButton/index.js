import React, { useContext } from 'react';
import NormalButton from '../NormalButton';
import { useExpressionContext, useExpressionUpdateContext } from '../../hooks/useExpressionContext';

const EqualButton = ({ updateResult }) => {
    const expression = useExpressionContext();
    const { append } = useExpressionUpdateContext();
	console.log(expression);
    return <NormalButton onClick={(() => updateResult(expression))}>=</NormalButton>;
};

export default EqualButton;