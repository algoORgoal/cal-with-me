import { useContext } from 'react';
import { ExpressionContext, ExpressionUpdateContext } from '../components/ExpressionProvider';

export const useExpressionContext = () => useContext(ExpressionContext);

export const useExpressionUpdateContext = () => useContext(ExpressionUpdateContext);