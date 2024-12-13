import React from 'react';

function Forecast() {
	return (
		<div className="bg-light-panels dark:bg-dark-panels text-light-text dark:text-white p-4  row-span-3 mr-4">
			<h3 className="text-lg font-medium ">7-DAY FORECAST</h3>
			<div className=" w-full h-full grid grid-rows-7 gap-4">
				<div className=" w-full flex-row gap-4 flex justify-between items-center ">
					<div className="text-md font-medium text-light-alt-text dark:text-dark-alt-text">
						13.12
					</div>
					<i className="fa-solid fa-sun text-3xl"></i>

					<div className="text-2xl">36/22°</div>
					<div className="text-sm">2.2 kWh</div>
				</div>
				<div className=" w-full flex-row gap-4 flex justify-between items-center ">
					<div className="text-md font-medium text-light-alt-text dark:text-dark-alt-text">
						13.12
					</div>
					<i className="fa-solid fa-sun text-3xl"></i>

					<div className="text-2xl">36/22°</div>
					<div className="text-sm">2.2 kWh</div>
				</div>
			</div>
		</div>
	);
}

export default Forecast;
