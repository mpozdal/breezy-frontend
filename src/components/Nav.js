import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import '../toogle.css';
import { NavLink } from 'react-router-dom';
function Nav() {
	const { darkMode, toggleDarkMode } = useDarkMode();
	return (
		<div className=" w-32 bg-light-panels dark:bg-dark-panels  flex flex-col justify-between items-center py-4">
			<span className=" text-light-alt-text dark:text-dark-text font-bold text-2xl">
				<NavLink to="/" className="flex flex-col items-center">
					<i class="fa-solid fa-wind"></i>Breezy
				</NavLink>
			</span>
			<ul className="text-center text-light-alt-text dark:text-dark-alt-text">
				<li class="mb-4 ">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? 'flex flex-col text-light-text dark:text-dark-text'
								: 'flex flex-col'
						}
					>
						<i class="fa-solid fa-cloud text-2xl"></i> Weather
					</NavLink>
				</li>
				<li class="mb-4 ">
					<NavLink
						to="/cities"
						className={({ isActive }) =>
							isActive
								? 'flex flex-col text-light-text dark:text-dark-text'
								: 'flex flex-col'
						}
					>
						<i class="fa-solid fa-city text-2xl"></i> Cities
					</NavLink>
				</li>
				<li class="mb-4 ">
					{' '}
					<NavLink
						to="/map"
						className={({ isActive }) =>
							isActive
								? 'flex flex-col text-light-text dark:text-dark-text'
								: 'flex flex-col'
						}
					>
						<i class="fa-solid fa-map text-2xl"></i>Map
					</NavLink>
				</li>
			</ul>

			<label className="flex flex-col justify-center items-center">
				<Toggle
					defaultChecked={darkMode}
					icons={false}
					className={`react`}
					onChange={toggleDarkMode}
				/>
				<span className="text-light-alt-text dark:text-dark-alt-text font-bold">
					Dark mode
				</span>
			</label>
		</div>
	);
}

export default Nav;