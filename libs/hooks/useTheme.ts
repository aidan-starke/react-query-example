import { useAtom } from "jotai";
import { themeStateAtom } from "@/libs/stores";

export const useTheme = () => {
	const [currentTheme, setCurrentTheme] = useAtom(themeStateAtom);
	const isDarkMode = currentTheme === "Dark";
	const toggleTheme = () => setCurrentTheme(isDarkMode ? "Light" : "Dark");

	return {
		currentTheme,
		isDarkMode,
		toggleTheme,
	};
};
