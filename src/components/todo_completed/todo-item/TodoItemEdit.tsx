import { css } from '@emotion/react';
import { IconPencil } from '@tabler/icons-react';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Blue } from '../../../theme/palette';

type TodoItemEditProps = {
    id: string
}

const TodoItemEdit: FC<TodoItemEditProps> = ({id}): JSX.Element | null => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => navigate(id), [id]);

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
                        background: Blue['A200'],
                    },
                    '&:hover svg': {
                        stroke: 'white',
                    },
                })}
                onClick={handleClick}
            >
                <IconPencil size={18} color={Blue['A200']}/>
            </button>
        </div>
    );
};

export default TodoItemEdit;