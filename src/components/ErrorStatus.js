import { useEffect, useState } from 'react';
import { useError } from '../contexts/ErrorContext';
function ErrorStatus() {
	const { error } = useError();
	const [isVisible, setIsVisible] = useState(true);

	return (
		error &&
		isVisible && (
			<div className=" bg-red-500 p-4 flex justify-between items-center text-white text-sm w-full font-bold z-10 absolute bottom-0">
				ERROR: {error.message}
				<button
					onClick={() => {
						setIsVisible(false);
					}}
				>
					<i class="fa-solid fa-x"></i>
				</button>
			</div>
		)
	);
}

export default ErrorStatus;
