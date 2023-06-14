import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SettingInterface, createSettingSlice } from "./setting.store";
import { TodoListInterface, createListSlice } from "./list.store";

export const useStore = create<SettingInterface & TodoListInterface>()(persist(
    (...a) => ({
        ...createListSlice(...a),
        ...createSettingSlice(...a),
    }), {
        name: 'todolist'
    }
));