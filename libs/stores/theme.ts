import { atom } from "jotai";

type ThemeState = "Light" | "Dark";

const themeAtom = atom<ThemeState>(
	(typeof window !== "undefined"
		? (localStorage.getItem("colour-theme") as ThemeState)
		: "Light") ?? "Light"
);

export const themeStateAtom = atom(
	(get) => get(themeAtom),
	(_, set, newTheme: ThemeState) => {
		set(themeAtom, newTheme);
		if (typeof window !== "undefined")
			localStorage.setItem("colour-theme", newTheme);
	}
);
