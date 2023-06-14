import { StateCreator } from "zustand";
import { TodoListInterface } from "./list.store";

export interface SettingInterface {
    bgColor: string;
    ftColor: string;
    setBGColor: (bgColor: string) => void;
    setFTColor: (ftColor: string) => void;
}

export const createSettingSlice: StateCreator<
    SettingInterface & TodoListInterface,
    [],
    [],
    SettingInterface
> = set => ({
    bgColor: '#0000ff',
    ftColor: '#ffffff',
    setBGColor: bgColor => set({ bgColor }),
    setFTColor: ftColor => set({ ftColor }),
});