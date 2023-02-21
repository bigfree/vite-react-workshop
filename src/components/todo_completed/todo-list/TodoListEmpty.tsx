import { css } from '@emotion/react';
import { FC } from 'react';
import { Gray } from '../../../theme/palette';

const TodoListEmpty: FC = (): JSX.Element => {
    return (
        <div css={css({
            padding: '1.5rem',
            textAlign: 'center',
            borderRadius: '.25rem',
            border: `1px solid ${Gray['A500']}`
        })}>
            Todos is empty 😢
        </div>
    );
};

export default TodoListEmpty;