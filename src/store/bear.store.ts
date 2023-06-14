import { StateCreator, create } from "zustand";

interface BearSlice {
    bears: number;
    addBear: () => void;
    eatFish: () => void;
}

interface FishSlice {
    fishes: number;
    addFish: () => void;
}

const createBearSlice: StateCreator<
    BearSlice & FishSlice,
    [],
    [],
    BearSlice
> = set => ({
    bears: 0,
    addBear: () => set(state => ({ bears: state.bears + 1 })),
    eatFish: () => set(state => ({ fishes: state.fishes - 1 })),
});

const createFishSlice: StateCreator<
    BearSlice & FishSlice,
    [],
    [],
    FishSlice
> = set => ({
    fishes: 0,
    addFish: () => set(state => ({ fishes: state.fishes + 1 })),
});

const useBoundStore = create<BearSlice & FishSlice>()((...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
}));

export default useBoundStore;