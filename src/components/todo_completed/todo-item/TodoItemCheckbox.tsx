import { css } from '@emotion/react';
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
            completedAt: !todo.isComplete ? new Date() : null,
        });
    }, [todo]);

    return (
        <div css={css({
            width: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        })}>
            <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={handleCompleteTodo}
                title={'Is active'}
            />
        </div>
    );
};

export default TodoItemCheckbox;