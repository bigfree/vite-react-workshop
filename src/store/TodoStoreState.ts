import { enableMapSet, produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { todoStorePersisConfig } from '../config/PersistStoreConfig';

enableMapSet();

export type TodoEntity = {
    id: string;
    name: string;
    isComplete: boolean;
    createdAt?: Date;
    completedAt?: Date | null;
}

export type TodoStoreState = {
    todos: Map<string, TodoEntity>;
    getTodo: (id: string) => TodoEntity | undefined;
    getTodos: () => TodoEntity[];
    setTodo: (todo: TodoEntity) => void;
    editTodo: (todo: TodoEntity) => void;
    removeTodo: (id: string) => void;
    removeAllTodo: () => void;
    _hasHydrated: boolean,
    _setHasHydrated: (state: boolean) => void;
}

const useTodoStore = create<TodoStoreState>()(persist((set, get) => ({
    todos: new Map([]),
    _hasHydrated: false,
    getTodo: (id: string) => {
        return get().todos.get(id);
    },
    getTodos: () => {
        return Array.from(get().todos.values()) as TodoEntity[];
    },
    setTodo: (todo: TodoEntity) => {
        set(produce((draft: TodoStoreState) => {
            draft.todos.set(todo.id, {
                ...todo,
                createdAt: new Date(),
                completedAt: null,
            });
        }));
    },
    editTodo: (todo: TodoEntity) => {
        set(produce((draft: TodoStoreState) => {
            if (!get().todos.get(todo.id)) {
                throw new Error(`Todo with id ${todo.id} not exist`);
            }

            draft.todos.set(todo.id, todo);
        }));
    },
    removeTodo: (id: string) => {
        set(produce((draft: TodoStoreState) => {
            const result: boolean = draft.todos.delete(id);

            if (!result) {
                throw new Error(`Could not delete todo with id ${id}`);
            }
        }));
    },
    removeAllTodo: () => {
        set(produce((draft: TodoStoreState) => {
            draft.todos = new Map([]);
        }));
    },
    _setHasHydrated: (isHydrated: boolean) => {
        set(produce((draft: TodoStoreState) => {
            draft._hasHydrated = isHydrated;
        }));
    },
}), todoStorePersisConfig));

export default useTodoStore;