import { useState } from 'react';

const useToggleEye = () => {
	const [isEyeOn, setIsEyeOn] = useState(false);

	const toggleEye = () => setIsEyeOn((prev) => !prev);

	return { isEyeOn, toggleEye };
};

export { useToggleEye };
