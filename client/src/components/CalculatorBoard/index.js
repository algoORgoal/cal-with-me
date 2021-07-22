import React from 'react';
import InputArea from '../InputArea';
import OutputArea from '../OutputArea';
import ExpressionProvider from '../ExpressionProvider'
import styled from 'styled-components';
import useResult from '../../hooks/useResult';

const CalculatorBoard = () => {
	const [result, updateResult] = useResult();
	
	 return (<ExpressionProvider>
		<OutputArea result={result} />
		<InputArea updateResult={updateResult} />
	</ExpressionProvider>);
};

export default CalculatorBoard;