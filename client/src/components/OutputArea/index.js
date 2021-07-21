import React, { useContext } from 'react';
import Text from '../Text';
import styled from 'styled-components';
import useExpression from '../../hooks/useExpression';
import { useExpressionContext, useExpressionUpdateContext } from '../../hooks/useExpressionContext';

const Container = styled.div`
    text-align: center;
`;

const OutputArea = () => {
    const expression = useExpressionContext();
    const { evaluate } = useExpressionUpdateContext();

    return (
        <Container>
            <h3>
                <Text>{expression}</Text>
            </h3>
            <h4>
                <Text>{}</Text>
            </h4>
        </Container>
    );
};

export default OutputArea;