import { PersistOptions } from 'zustand/middleware';
import { TodoEntity, TodoStoreState } from '../store/TodoStoreState';

export const todoStorePersisConfig: PersistOptions<TodoStoreState> = {
    name: 'todoStore',
    serialize: (data) => {
        return JSON.stringify({
            ...data,
            state: {
                ...data.state,
                todos: Array.from(data.state.todos as Map<string, TodoEntity>),
            },
        });
    },
    deserialize: (value) => {
        const data = JSON.parse(value);
        data.state.todos = new Map<string, TodoEntity>(data.state.todos);
        return data;
    },
};