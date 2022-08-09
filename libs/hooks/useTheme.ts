import create, { StateCreator } from "zustand";

import { devtools, persist } from "zustand/middleware";

interface ThemeState {
	theme: "Light" | "Dark";
	toggleTheme: () => void;
}

type ThemeStore = StateCreator<
	ThemeState,
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	[],
	ThemeState
>;

const themeStore: ThemeStore = (set) => ({
	theme: "Light",
	toggleTheme: () =>
		set((state) => ({
			theme: state.theme === "Light" ? "Dark" : "Light",
		})),
});

export const useTheme = create(
	devtools(persist(themeStore, { name: "colour-theme" }))
);
