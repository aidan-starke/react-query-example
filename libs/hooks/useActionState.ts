import create, { StateCreator } from "zustand";

interface ActionState {
	error: string;
	loading: boolean;
	blockData: Record<string, unknown>;
	formInput: string;
	updateState: <T>(key: string, data: T) => void;
	overrideState: <T>(key: string, data: T) => void;
}

type ActionStore = StateCreator<ActionState>;

const initialState = {
	error: "",
	loading: false,
	blockData: {},
	formInput: "",
};

const actionStore: ActionStore = (set) => ({
	...initialState,
	updateState: <T>(key: string, data: T) =>
		set((state) => ({ ...state, [key]: data })),
	overrideState: <T>(key: string, data: T) =>
		set(() => ({ ...initialState, [key]: data })),
});

export const useActionState = create(actionStore);
