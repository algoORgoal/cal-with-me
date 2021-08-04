import React from 'react';
import NormalButton from '../NormalButton';
import useExpression from '../../hooks/useExpression';
import { useExpressionUpdateContext } from '../../hooks/useExpressionContext';
import useOperator from '../../hooks/useOperator';

const OperatorButton = ({ children, operatorList, text }) => {
    const { append, updateOnceClicked } = useExpressionUpdateContext();
    const { operator, switchOperator } = useOperator(operatorList);

    return (
        <NormalButton
            value={operator}
            onClick={(e) => (
                append(e.target.value), switchOperator(), updateOnceClicked(operatorList)
            )}
        >
            {text || operator}
        </NormalButton>
    );
};

export default OperatorButton;