import React from 'react';

function CityItem({ data }) {
	console.log(data);
	return (
		<div
			class="h-[100px] flex flex-row items-center justify-between bg-light-panels dark:bg-dark-panels text-light-text 
                cursor-pointer 
				border-b-[1px] border-b-dark-alt-text dark:border-none
            dark:text-dark-text hover:transition-all p-4 hover:bg-dark-panels hover:dark:bg-light-panels hover:text-dark-text hover:dark:text-light-text"
		>
			<div className="flex flex-row items-center gap-8">
				<i className="fa-solid fa-sun text-6xl"></i>
				<div>
					<h3 className="text-3xl font-medium ">{data}</h3>
					{/* <h3
						className="text-md font-normal 
                     "
					>
						10:23
					</h3> */}
				</div>
			</div>
			<div className="flex flex-row items-center gap-4">
				{/* <h3 className="text-6xl font-bold">32°</h3> */}
				<button>
					<i class="fa-regular fa-star text-xl"></i>
				</button>
			</div>
		</div>
	);
}

export default CityItem;
