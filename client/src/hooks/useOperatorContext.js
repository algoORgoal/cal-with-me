import { createContext, useState, useContext } from 'react';
import useOperator from '../useOperator';

export const LeftOperatorContext = createContext(null);

export const RightOperatorContext = createContext(null);

export const LeftOperatorUpdateContext = createContext(null);

export const RightOperatorUpdateContext = createContext(null);

export const LeftOperatorUpdateProvider = ({ operatorList, children }) => {
	const { operator, switchOperator, initializeOperator } = useOperator(operatorList);
	return (
		<LeftOperatorContext.Provider value={operator}>
			<LeftOperatorUpdateContext.Provider value={(switchOperator, initializeOperator)}>
				{children}
			</LeftOperatorUpdateContext.Provider>
		</LeftOperatorContext.Provider>
	);
};

export const RightOperatorUpdateProvider = ({ operatorList, children }) => {
	const { operator, switchOperator, initializeOperator } = useOperator(operatorList);
	return (
		<RightOperatorContext.Provider value={operator}>
			<RightOperatorUpdateContext.Provider value={(switchOperator, initializeOperator)}>
				{children}
			</RightOperatorUpdateContext.Provider>
		</RightOperatorContext.Provider>
	);
};

export const useLeftOperatorContext = () => useContext(LeftOperatorContext);

export const useRightOperatorContext = () => useContext(RightOperatorContext);

export const useLeftOperatorUpdateContext = () => useContext(LeftOperatorUpdateContext);

export const useRightOperatorUpdateContext = () => useContext(RightOperatorUpdateContext);
