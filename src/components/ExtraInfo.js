import React from 'react';

function ExtraInfo() {
	return (
		<div class="flex flex-col  bg-light-panels dark:bg-dark-panels text-light-text dark:text-dark-text  p-4  ">
			<h3 className="text-lg font-medium ">WEEKLY REVIEW</h3>
			<div className="grid grid-cols-2 grid-rows-2 text-sm h-full">
				<div className="text-left flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Max temp
					</span>
					<span className="text-3xl">32°</span>
				</div>
				<div className="text-right flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Min temp
					</span>
					<span className="text-3xl">32°</span>
				</div>
				<div className="text-left flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Avg pressure
					</span>
					<span className="text-3xl">997 hPa</span>
				</div>
				<div className="text-right flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Sun activity
					</span>
					<span className="text-3xl">12h</span>
				</div>
				<div className="col-span-2 text-justify font-medium text-sm self-end">
					<span className="font-bold">Desc: </span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
			</div>
		</div>
	);
}

export default ExtraInfo;
