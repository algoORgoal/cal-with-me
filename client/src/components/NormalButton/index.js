import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background: white;
	color: palevioletred;
	font-size: 1em;
	margin: 1em 1em;
	padding: 1em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	&: hover {
		border-color: grey;
		color: grey;
	}
`;

const NormalButton = ({ children, className, onClick, value = '' }) => (
	<Button type="button" className={className} value={value} onClick={onClick}>
		{children}
	</Button>
);

export default NormalButton;