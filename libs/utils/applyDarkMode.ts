import clsx from "clsx";

export const applyDarkModeText = (className: string, isDarkMode: boolean) =>
	clsx(className, isDarkMode && "text-gray-300");

export const applyDarkModeLink = (className: string, isDarkMode: boolean) =>
	clsx(className, isDarkMode && "text-blue-200");

export const applyDarkModeBorder = (className: string, isDarkMode: boolean) =>
	clsx(className, isDarkMode && "border-gray-400");

export const applyDarkModeBackground = (
	className: string,
	isDarkMode: boolean
) => clsx(className, isDarkMode && "bg-gray-300");
