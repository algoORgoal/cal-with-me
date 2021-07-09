import React from 'react';
import styled from 'styled-components';

// const Wrapper = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(3, 1fr);
// 	align-items: end;
// 	grid-auto-rows: 200px;
// `;

// const Box1 = styled.div`
// 	align-self: stretch;
// 	background-color: red;
// `;

// const Box2 = styled.div`
// 	align-self: start;
// 	background-color: blue;
// `;

// const Box3 = styled.div`
// 	background-color: green;
// `

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	background-color: cyan;
`;

const Box1 = styled.div`
	background-color: red;
`;

const Box2 = styled.div`
	background-color: blue;
`;

const Box3 = styled.div`
	background-color: green;
`;

const Grid = () => (
	<Wrapper>
		<Box1>One</Box1>
		<Box2>Two</Box2>
		<Box3>Three</Box3>
		<Box1>One</Box1>
		<Box2>Two</Box2>
		<Box3>Three</Box3>
		<Box1>One</Box1>
		<Box2>Two</Box2>
		<Box3>Three</Box3>
		<Box1>One</Box1>
		<Box2>Two</Box2>
		<Box3>Three</Box3>
		<Box1>One</Box1>
		<Box2>Two</Box2>
		<Box3>Three</Box3>
	</Wrapper>
);

export default Grid;