import { StateCreator } from "zustand";
import { SettingInterface } from "./setting.store";

type TodoItemType = {
    title: string;
    due: null|string;
    select?: boolean;
};

export interface TodoListInterface {
    todoItem: TodoItemType;
    todoList: TodoItemType[];
    delList: (index: number) => void;
    pushItem2List: () => void;
    selectList: (index: number, select: boolean) => void;
    setDueDate: (due: string) => void;
    setTitle: (title: string) => void;
}

export const createListSlice: StateCreator<
    SettingInterface & TodoListInterface,
    [],
    [],
    TodoListInterface
> = set => ({
    todoItem: { title: '', due: null },
    todoList: [
        { title: 'demo1', due: '2023-05-05' },
        { title: 'demo2', due: '2023-05-07' },
        { title: 'demo3', due: '2023-05-09' },
    ],
    delList: index => set(({ todoList }) => {
        todoList.splice(index, 1);
        return { todoList };
    }),
    pushItem2List: () => set(({ todoItem, todoList }) => ({
        todoItem: { title: '', due: null },
        todoList: [
            ...todoList,
            todoItem,
        ],
    })),
    selectList: (index, select) => set(({ todoList }) => {
        const item = todoList[index];
        if (item !== undefined) {
            todoList[index] = {
                ...item,
                select,
            };
        }
        return { todoList };
    }),
    setDueDate: due => set(({ todoItem }) => ({
        todoItem: { 
            ...todoItem,
            due,
        }
    })),
    setTitle: title => set(({ todoItem }) => ({
        todoItem: {
            ...todoItem,
            title,
        }
    })),
});