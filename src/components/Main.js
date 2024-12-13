import React from 'react';

function Main() {
	return (
		<div className="flex flex-row  w-full text-light-text dark:text-white">
			<div className="text-5xl font-bold  flex flex-col h-full px-10  justify-around">
				Madrid, ES
				<div className="text-8xl font-bold ">32°</div>
			</div>
			<div className="text-4xl font-bold flex h-full  justify-center  items-center w-full ">
				<i className="fa-solid fa-sun text-9xl"></i>
			</div>
		</div>
	);
}

export default Main;
