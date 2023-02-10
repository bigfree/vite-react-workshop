import { FC } from 'react';
import TodoItem from '../todo-item/TodoItem';

const TodoList: FC = (): JSX.Element => {
    return (
        <div>
            <TodoItem id={'xxx'}/>
        </div>
    )
}

export default TodoList;