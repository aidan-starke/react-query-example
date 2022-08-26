import { atom } from "jotai";

interface ActionState {
	error: string;
	loading: boolean;
	blockData: Record<string, unknown>;
	formInput: string;
}

const initialState = {
	error: "",
	loading: false,
	blockData: {},
	formInput: "",
};

const actionAtom = atom<ActionState>(initialState);

interface ActionUpdate {
	key: string;
	value: unknown;
	override?: boolean;
}

export const actionStateAtom = atom(
	(get) => get(actionAtom),
	(get, set, update: ActionUpdate) => {
		set(actionAtom, {
			...(update?.override ? initialState : get(actionAtom)),
			[update.key]: update.value,
		});
	}
);
