import { useState } from 'react';
import {
    OPERATOR_LIST,
    DIGIT_LIST,
    OPENING_BRACKET,
    CLOSING_BRACKET,
    OPERATOR_PRIORITY,
    ADD_OPERATOR,
    SUBTRACT_OPERATOR,
    MULTIPLY_OPERATOR,
    DIVIDE_OPERATOR,
} from '../constants';

const useResult = () => {
    const [result, setResult] = useState(null);

    const calculate = (expression) => {
        const postfixExpression = generatePostfixExpression(expression);
		console.log(postfixExpression)
        const stack = [];

        postfixExpression.map((element) => {
            if (!isStringOperator(element)) {
                stack.push(element);
            }
            const [secondOperand, firstOperand] = [stack.pop(), stack.pop()];

            switch (element) {
                case ADD_OPERATOR:
                    stack.push(Number(firstOperand) + Number(secondOperand));
                    break;
                case SUBTRACT_OPERATOR:
                    stack.push(Number(firstOperand) - Number(secondOperand));
                    break;
                case MULTIPLY_OPERATOR:
                    stack.push(Number(firstOperand) * Number(secondOperand));
                    break;
                case DIVIDE_OPERATOR:
                    stack.push(Number(firstOperand) / Number(secondOperand));
                    break;
                default:
                    console.error('operator is not valid');
            }
        });

        const answer = stack.pop();

        setResult(answer);
    };

    const generatePostfixExpression = (infixExpression) => {
        // 1. For operand, push it to stack
        // 2. For operator,
        // if operator is '(', push it to stack and return
        // if operator is ')', pop operator in stack until it runs into '(' and return
        // if operator has higher priority than the last one in stack, push it to stack and return
        // while operator has lower priority than the last one in stack, push the last one to stack
        // when the procedure is over, pop all the operators in stack

        const stack = [];
        const postfixExpression = [];
		
		
		// fix here...
        infixExpression.map((element) => {
			console.log(postfixExpression);
			console.log(stack);
            if (isStringOperator(element)) {
                const top = stack[stack.length - 1];
                if (element === OPENING_BRACKET) {
                    stack.push(element);
                } else if (element === CLOSING_BRACKET) {
                    while (top !== ')') {
                        postfixExpression.push(stack.pop());
                    }
                } else if (OPERATOR_PRIORITY[element] > OPERATOR_PRIORITY[top]) {
                    stack.push(element);
                }

                while (OPERATOR_PRIORITY[element] < OPERATOR_PRIORITY[top])
                    postfixExpression.push(stack.pop());

                stack.push(element);
            }
        });

        while (stack.length) {
            postfixExpression.push(stack.pop());
        }

        return postfixExpression;
    };

    const isStringOperator = (string) => OPERATOR_LIST.some((OPERATOR) => string === OPERATOR);

    return [result, calculate];
};

export default useResult;