import { css } from '@emotion/react';
import { IconX } from '@tabler/icons-react';
import { nanoid } from 'nanoid';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import useTodoStore, { TodoStoreState } from '../../../store/TodoStoreState';
import { Blue, Gray, Red } from '../../../theme/palette';
import './AddTodo.css';

const buttonSharedCss = css({
    marginLeft: '.5rem',
    color: '#fff',
    height: 44,
    borderRadius: '0.25rem',
    border: 0,
    fontWeight: 'bold',
    cursor: 'pointer',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: 16,
});

const AddTodo: FC = (): JSX.Element => {
    const setTodo = useTodoStore((store: TodoStoreState) => store.setTodo);
    const removeAllTodos = useTodoStore((store: TodoStoreState) => store.removeAllTodo);
    const [todoName, setTodoName] = useState<string>('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (0 === todoName.trim().length) {
            alert('Cannot add empty name!');
            return;
        }

        setTodo({
            id: nanoid(),
            name: todoName,
            isComplete: false,
        });

        setTodoName('');
    };

    return (
        <div className={'add-todo'}>
            <form className={'todo-form'} onSubmit={onSubmit}>
                <div css={css({
                    flex: 1,
                    position: 'relative',
                })}>
                    <input
                        type="text"
                        autoComplete={'off'}
                        className={'add-todo__input'}
                        value={todoName}
                        placeholder={'Enter new todo...'}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setTodoName(event.target.value)}
                        css={css({
                            '&::placeholder': {
                                color: Gray['A200']
                            }
                        })}
                    />
                    {todoName && (<button
                        type={'button'}
                        onClick={() => setTodoName('')}
                        css={css({
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            background: 'none',
                            outline: 0,
                            border: 0,
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            cursor: 'pointer',
                        })}>
                        <IconX size={18}/>
                    </button>)}
                </div>
                <button
                    type={'submit'}
                    css={css([buttonSharedCss, {
                        background: Blue[0],
                        boxShadow: `2px 2px 0 0 ${Blue[300]}`,
                        '&:hover': {
                            background: Blue['A200'],
                        },
                    }])}
                >Add todo
                </button>
                <button
                    type={'button'}
                    onClick={() => removeAllTodos()}
                    css={css([buttonSharedCss, {
                        background: Red[0],
                        boxShadow: `2px 2px 0 0 ${Red[300]}`,
                        '&:hover': {
                            background: Red['A200'],
                        },
                    }])}
                >Delete all
                </button>
            </form>
        </div>
    );
};

export default AddTodo;