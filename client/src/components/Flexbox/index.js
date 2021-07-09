import React from 'react';
import styled from 'styled-components';

// const Wrapper = styled.div`
// 	width: 450px;
// 	display: flex;
// 	flex-wrap: wrap;
// 	div {
// 		flex: 1 1 150px;
// 		background-color: blue;
// 	}
// `;

// const Flexbox = () => (
// 	<Wrapper>
// 		<div>One</div>
// 		<div>Two</div>
// 		<div>Three</div>
// 		<div>Four</div>
// 		<div>Five</div>
// 		<div>Six</div>
// 		<div>Seven</div>
// 	</Wrapper>
// );

// export default Flexbox;

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	min-height: 200px;
`;

const Box1 = styled.div`
	align-self: stretch;
	background-color: red;
`;

const Box2 = styled.div`
	align-self: flex-start;
	background-color: blue;
`;

const Box3 = styled.div`
	background-color: green;
`;

const Flexbox = () => (
	<Wrapper>
		<Box1>One</Box1>
		<Box2>Two</Box2>
		<Box3>Green</Box3>
	</Wrapper>
);

export default Flexbox;