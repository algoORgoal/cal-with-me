import React from 'react';
import NormalButton from '../NormalButton';
import { useExpressionUpdateContext } from '../../hooks/useExpressionContext';

const AllClearButton = () => {
	const { allClear } = useExpressionUpdateContext();
	return <NormalButton onClick={allClear}>AC</NormalButton>;
};

export default AllClearButton;