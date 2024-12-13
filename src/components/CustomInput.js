import React from 'react';

function CustomInput({ placeholder }) {
	return (
		<input
			type="text"
			class="focus:outline-none focus:ring-0 w-full bg-light-panels dark:bg-dark-panels text-light-text border-light-text border-b-2 rounded-none dark:text-dark-text p-4 "
			placeholder={placeholder}
		/>
	);
}

export default CustomInput;
