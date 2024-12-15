import React from 'react';

function EmptyList() {
	return (
		<div
			className="h-full w-full flex flex-col items-center justify-center gap-10 
            bg-light-panels dark:bg-dark-panels text-light-text  
            dark:text-dark-alt-text"
		>
			<i className="fa-solid fa-list text-[5rem]"></i>
			<h3 className="text-3xl font-bold text-center">
				ADD YOUR FAV CITIES
			</h3>
		</div>
	);
}

export default EmptyList;
