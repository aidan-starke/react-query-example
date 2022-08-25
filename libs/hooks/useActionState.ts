import create, { StateCreator } from "zustand";

interface ActionState {
	error?: string;
	loading: boolean;
	blockData?: Record<string, unknown>;
	blockNumber?: string;
	updateState: <T>(key: string, data: T) => void;
}

type ActionStore = StateCreator<ActionState>;

const initialState = {
	error: undefined,
	loading: false,
	blockData: undefined,
	blockNumber: undefined,
};

const actionStore: ActionStore = (set) => ({
	...initialState,
	updateState: <T>(key: string, data: T) =>
		set((state) => ({ ...state, [key]: data })),
});

export const useActionState = create(actionStore);
