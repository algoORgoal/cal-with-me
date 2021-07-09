import React from 'react';
import InputArea from '../InputArea';
import OutputArea from '../OutputArea';
import ExpressionProvider from '../ExpressionProvider'
import styled from 'styled-components';

const CalculatorBoard = () => (
	<ExpressionProvider>
		<OutputArea />
		<InputArea />
	</ExpressionProvider>
);

export default CalculatorBoard;