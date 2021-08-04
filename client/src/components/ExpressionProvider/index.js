import { createContext, useState } from 'react';
import useExpression from '../../hooks/useExpression';

export const ExpressionContext = createContext(null);
export const ExpressionUpdateContext = createContext(null);

const ExpressionProvider = ({ children }) => {
	const { expression, clear, allClear, append, evaluate, updateOnceClicked, findValidParenthesis } = useExpression();

	return (
		<ExpressionContext.Provider value={expression}>
			<ExpressionUpdateContext.Provider
				value={{ clear, allClear, append, evaluate, updateOnceClicked, findValidParenthesis }}
			>
				{children}
			</ExpressionUpdateContext.Provider>
		</ExpressionContext.Provider>
	);
};

export default ExpressionProvider;