import React, { useContext } from 'react';
import AllClearButton from '../AllClearButton';
import ClearButton from '../ClearButton';
import NumberButton from '../NumberButton';
import OperatorButton from '../OperatorButton';
import EqualButton from '../EqualButton';
import NormalButton from '../NormalButton';
import styled from 'styled-components';
import { ExpressionUpdateContext } from '../ExpressionProvider';

const OuterContainer = styled.div``;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 100px);
`;

const NumberButtonItem = styled(NumberButton)`
    grid-row: ${(props) => props.children === 0 && 4};
    grid-column: ${(props) => props.children === 0 && 2};
`;

const InputArea = ({ updateResult }) => {
    const numberButtonItemList = [...new Array(10)].map((_, index) => (
        <NumberButtonItem key={index} value={index}>
            {index}
        </NumberButtonItem>
    ));

    const { clear, allClear, append } = useContext(ExpressionUpdateContext);

    return (
        <OuterContainer>
            <Container>
                {numberButtonItemList}
                <OperatorButton operatorList={['+', '-']} />
                <OperatorButton operatorList={['*', '/']} />
                <AllClearButton />
                <EqualButton updateResult={updateResult}/>
                <ClearButton />
            </Container>
        </OuterContainer>
    );
};

// Props of NumberButton === 0:
// change the Button to
// else:
// set its grid-row to 5 and grid-col to 2

export default InputArea;