import { FC } from 'react';

type TodoItemProps = {
    id: string
}

const TodoItem: FC<TodoItemProps> = ({id}): JSX.Element => {
    return (
        <div>
            TODO item
        </div>
    );
};

export default TodoItem;