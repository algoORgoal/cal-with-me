import React from 'react';
import Text from '../Text';
import styled from 'styled-components';
import useExpression from '../../hooks/useExpression';

const Container = styled.div`
	text-align: center;
`;

const OutputArea = () => {
	const { expression } = useExpression();
	console.log(expression);
	return (
		<Container>
			{expression}
			<h3>
				<Text>{expression}</Text>
			</h3>
			<h4>
				<Text>2</Text>
			</h4>
		</Container>
	);
};

export default OutputArea;