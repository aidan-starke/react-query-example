import create, { StateCreator } from "zustand";

import { devtools, persist } from "zustand/middleware";
import { AcalaBlocks, AcalaTransfers } from "@/libs/types";

export interface StoreState {
	blocks?: AcalaBlocks;
	transfers?: AcalaTransfers;
	setBlocks: (blocks: AcalaBlocks) => void;
	setTransfers: (transfers: AcalaTransfers) => void;
}

type Store = StateCreator<
	StoreState,
	[["zustand/devtools", never], ["zustand/persist", unknown]],
	[],
	StoreState
>;

const store: Store = (set) => ({
	blocks: [],
	transfers: [],
	setBlocks: (blocks: AcalaBlocks) =>
		set(() => ({
			blocks,
		})),
	setTransfers: (transfers: AcalaTransfers) =>
		set(() => ({
			transfers,
		})),
});

export const useStore = create(
	devtools(
		persist(store, {
			name: "store",
		})
	)
);
