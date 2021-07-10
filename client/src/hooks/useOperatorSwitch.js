import { useState } from 'react';

const useOperatorSwitch = (operatorList) => {
	const [operatorSwitch, setOperatorSwitch] = useOperatorSwitch(true);

	return [operatorSwitch, setOperatorSwitch];
};

export default useOperatorSwitch;