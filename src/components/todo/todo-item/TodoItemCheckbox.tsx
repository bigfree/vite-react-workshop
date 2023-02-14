import { FC, useCallback } from 'react';
import useTodoStore, { TodoStoreState } from '../../../store/TodoStoreState';

type TodoItemCheckboxProps = {
    id: string
}

const TodoItemCheckbox: FC<TodoItemCheckboxProps> = ({id}): JSX.Element | null => {
    const todo = useTodoStore((store: TodoStoreState) => store.getTodo(id));
    const editTodo = useTodoStore((store: TodoStoreState) => store.editTodo);

    if (!todo) {
        return null;
    }

    const handleCompleteTodo = useCallback(() => {
        editTodo({
            ...todo,
            isComplete: !todo.isComplete,
        });
    }, [todo]);

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={handleCompleteTodo}
            />
        </div>
    );
};

export default TodoItemCheckbox;