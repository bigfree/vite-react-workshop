import { css } from '@emotion/react';
import { FC } from 'react';
import useTodoStore, { TodoEntity, TodoStoreState } from '../../../store/TodoStoreState';
import TodoItem from '../todo-item/TodoItem';
import TodoListEmpty from './TodoListEmpty';
import TodoListFilter from './TodoListFilter';

const TodoList: FC = (): JSX.Element => {
    const todos = useTodoStore((store: TodoStoreState) => store.getTodos());

    return (
        <div css={css({
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '1rem',
        })}>
            {0 === todos.length ? <TodoListEmpty/> : (
                <div>
                    <TodoListFilter/>
                    {todos.map((todo: TodoEntity, key: number) => (
                        <TodoItem id={todo.id} key={key}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TodoList;