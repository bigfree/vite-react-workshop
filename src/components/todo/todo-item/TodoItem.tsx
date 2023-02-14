import { FC } from 'react';
import useTodoStore, { TodoStoreState } from '../../../store/TodoStoreState';
import './TodoItem.css';
import TodoItemCheckbox from './TodoItemCheckbox';

type TodoItemProps = {
    id: string
}

const TodoItem: FC<TodoItemProps> = ({id}): JSX.Element | null => {
    const todo = useTodoStore((store: TodoStoreState) => store.getTodo(id));
    const removeTodo = useTodoStore((store: TodoStoreState) => store.removeTodo);

    if (!todo) {
        return null;
    }

    return (
        <div className={'todo-item'}>
            <div>
                <TodoItemCheckbox id={id}/>
            </div>
            {todo.name}
            {new Date(todo.createdAt ? todo.createdAt : '').toLocaleString()}
            <button onClick={() => removeTodo(id)}>Delete</button>
        </div>
    );
};

export default TodoItem;