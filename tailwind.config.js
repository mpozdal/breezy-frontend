/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'dark-background': '#0b131e',
				'dark-text': '#ffffff',
				'light-background': '#F8FAFC',
				'light-text': '#202b3b',
				'dark-panels': '#202b3b',
				'light-panels': '#F8FAFC',
				'dark-alt-text': '#BDBDBD',
				'light-alt-text': '#0b131e',
			},
		},
	},
	plugins: [],
};
