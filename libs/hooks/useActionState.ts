import { useAtom } from "jotai";
import { actionStateAtom } from "@/libs/stores";

export const useActionState = () => {
	const [actionState, setActionState] = useAtom(actionStateAtom);
	const isBlockHash = actionState.formInput.startsWith("0x");

	const updateState = <T>(key: string, value: T) =>
		setActionState({ key, value });

	const overrideState = <T>(key: string, value: T) =>
		setActionState({ key, value, override: true });

	return { isBlockHash, updateState, overrideState, ...actionState };
};
