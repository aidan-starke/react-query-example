import { atom } from "jotai";

type ThemeState = "Light" | "Dark";

const themeAtom = atom<ThemeState>(
	(localStorage.getItem("colour-theme") as ThemeState) ?? "Light"
);

export const themeStateAtom = atom(
	(get) => get(themeAtom),
	(_, set, newTheme: ThemeState) => {
		set(themeAtom, newTheme);
		localStorage.setItem("colour-theme", newTheme);
	}
);
