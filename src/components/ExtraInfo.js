import { useWeather } from '../contexts/WeatherContext';
function ExtraInfo() {
	const { weeklyInfo } = useWeather();
	return (
		<div className="flex flex-col  bg-light-panels dark:bg-dark-panels text-light-text dark:text-dark-text  p-4  ">
			<h3 className="text-lg font-medium ">WEEKLY REVIEW</h3>
			<div className="grid grid-cols-2 grid-rows-2 text-sm h-full">
				<div className="text-left flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Max temp
					</span>
					<span className="text-3xl">
						{weeklyInfo?.max_week_temp}°
					</span>
				</div>
				<div className="text-right flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Min temp
					</span>
					<span className="text-3xl">
						{weeklyInfo?.min_week_temp}°
					</span>
				</div>
				<div className="text-left flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Avg pressure
					</span>
					<span className="text-3xl">
						{weeklyInfo?.avg_pressure || 997} hPa
					</span>
				</div>
				<div className="text-right flex flex-col">
					<span className="text-light-alt-text dark:text-dark-alt-text">
						Sun activity
					</span>
					<span className="text-3xl">
						{(weeklyInfo?.avg_sunshine_time / 3600).toFixed(2)}h
					</span>
				</div>
				<div className="col-span-2 text-justify font-medium text-sm self-end">
					<span className="font-bold">Desc: </span>
					{weeklyInfo?.desc ||
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
				</div>
			</div>
		</div>
	);
}

export default ExtraInfo;
