/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./libs/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
	darkMode: "class",
};
