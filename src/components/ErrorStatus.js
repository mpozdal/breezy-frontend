import React from 'react';
import { useError } from '../contexts/ErrorContext';
function ErrorStatus() {
	const { error } = useError();
	return (
		error && (
			<div className="absolute top-4 right-4 bg-red-500 p-4 min-w-[100px] text-white">
				Error: {error}
			</div>
		)
	);
}

export default ErrorStatus;
