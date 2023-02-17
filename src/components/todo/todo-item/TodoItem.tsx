import { css } from '@emotion/react';
import { FC } from 'react';
import useTodoStore, { TodoStoreState } from '../../../store/TodoStoreState';
import './TodoItem.css';
import { Gray } from '../../../theme/palette';
import TodoItemCheckbox from './TodoItemCheckbox';
import TodoItemDelete from './TodoItemDelete';
import TodoItemEdit from './TodoItemEdit';

type TodoItemProps = {
    id: string
}

const TodoItem: FC<TodoItemProps> = ({id}): JSX.Element | null => {
    const todo = useTodoStore((store: TodoStoreState) => store.getTodo(id));

    if (!todo) {
        return null;
    }

    return (
        <div css={css({
            display: 'flex',
            alignItems: 'center',
            height: '44px',
            border: `1px solid ${Gray['A500']}`,
            borderRadius: '.15rem',
            marginBottom: '.5rem',
            boxShadow: `2px 2px 0 0 ${Gray['A800']}`
        })}>
            <div>
                <TodoItemCheckbox id={id}/>
            </div>
            <div css={css({
                flex: 1,
            })}>
                {todo.name}
            </div>
            {/*{new Date(todo.createdAt ? todo.createdAt : '').toLocaleString()}*/}
            <TodoItemEdit id={id}/>
            <TodoItemDelete id={id}/>
        </div>
    );
};

export default TodoItem;