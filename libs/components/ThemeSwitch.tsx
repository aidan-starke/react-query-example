import { FC } from "react";
import { useTheme } from "@/libs/hooks";
import { ToggleSwitch } from "flowbite-react";

export const ThemeSwitch: FC = () => {
	const currentTheme = useTheme((state) => state.theme);
	const toggleTheme = useTheme((state) => state.toggleTheme);

	return (
		<div className="flex flex-col absolute top-6 right-8 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5">
			<ToggleSwitch
				checked={currentTheme === "Dark"}
				label={`${currentTheme} mode`}
				onChange={toggleTheme}
			/>
		</div>
	);
};
