import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TodoEntity = {
    id: string;
    name: string;
    isComplete: boolean;
}

export type TodoStoreState = {
    todos: Map<string, TodoEntity>;
    getTodo: (id: string) => TodoEntity | undefined;
    getTodos: () => TodoEntity[];
    setTodo: (todo: TodoEntity) => void;
    removeTodo: (id: string) => void;
}

const useTodoStore = create<TodoStoreState>()(persist((set, get) => ({
    todos: new Map([]),
    getTodo: (id: string) => {
        return get().todos.get(id);
    },
    getTodos: () => {
        return Array.from(get().todos.values()) as TodoEntity[];
    },
    setTodo: (todo: TodoEntity) => {
        set(produce((state: TodoStoreState) => {
            state.todos.set(todo.id, todo);
        }));
    },
    removeTodo: (id: string) => {
        set(produce((state: TodoStoreState) => {
            const result: boolean = state.todos.delete(id);

            if (!result) {
                throw new Error(`Could not delete todo with id ${id}`);
            }
        }));
    },
}), {
    name: 'todo-store', // storage name
}));

export default useTodoStore;