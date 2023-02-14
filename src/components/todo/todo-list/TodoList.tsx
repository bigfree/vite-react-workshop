import { FC } from 'react';
import useTodoStore, { TodoEntity, TodoStoreState } from '../../../store/TodoStoreState';
import TodoItem from '../todo-item/TodoItem';

const TodoList: FC = (): JSX.Element => {
    const todos = useTodoStore((store: TodoStoreState) => store.getTodos());
    return (
        <div>
            {todos.map((todo: TodoEntity, key: number) => (
                <TodoItem id={todo.id} key={key}/>
            ))}
        </div>
    );
};

export default TodoList;