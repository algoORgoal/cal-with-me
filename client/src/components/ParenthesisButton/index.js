import React, { useState } from 'react';
import { useExpressionContext, useExpressionUpdateContext } from '../../hooks/useExpressionContext';
import NormalButton from '../NormalButton';
import { EMPTY_STRING } from '../../constants'
import styled from 'styled-components'

const ParenthesisButton = ({ children, operatorList, text }) => {
    const { append, findValidParenthesis } = useExpressionUpdateContext();

	//todo: onClick doesn't work
    return (
        <NormalButton value={findValidParenthesis()} onClick={(e) => findValidParenthesis() !== EMPTY_STRING && append(findValidParenthesis())}>
            {findValidParenthesis()}
        </NormalButton>
    );
};

export default ParenthesisButton;