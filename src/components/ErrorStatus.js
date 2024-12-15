import React from 'react';
import { useError } from '../contexts/ErrorContext';
function ErrorStatus() {
	const { error } = useError();
	return (
		error?.message && (
			<div className=" bg-red-500 p-4 text-white text-sm w-full font-bold z-10 absolute bottom-0">
				ERROR: {error?.message}
			</div>
		)
	);
}

export default ErrorStatus;
