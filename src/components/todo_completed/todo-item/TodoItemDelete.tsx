import { css } from '@emotion/react';
import { IconTrash } from '@tabler/icons-react';
import { FC, useCallback } from 'react';
import useTodoStore, { TodoStoreState } from '../../../store/TodoStoreState';
import { Red } from '../../../theme/palette';

type TodoItemDeleteProps = {
    id: string
}

const TodoItemDelete: FC<TodoItemDeleteProps> = ({id}): JSX.Element | null => {
    const removeTodo = useTodoStore((store: TodoStoreState) => store.removeTodo);
    const handleRemoveTodo = useCallback((id: string) => removeTodo(id), [id]);

    return (
        <div>
            <button
                type={'button'}
                css={css({
                    background: 'white',
                    border: 0,
                    padding: 0,
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    borderRadius: '.25rem',
                    marginRight: '.5rem',
                    '&:hover': {
                        background: Red[0]
                    },
                    '&:hover svg': {
                        stroke: 'white'
                    }
                })}
                onClick={() => handleRemoveTodo(id)}
            >
                <IconTrash size={18} color={Red[0]}/>
            </button>
        </div>
    );
};

export default TodoItemDelete;