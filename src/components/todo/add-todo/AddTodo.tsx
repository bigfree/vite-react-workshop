import { nanoid } from 'nanoid';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import './AddTodo.css';
import useTodoStore, { TodoStore } from '../../../store/TodoStore';

const addTodoSelector = (store: TodoStore) => store.setTodo;

const AddTodo: FC = (): JSX.Element => {
    const setTodo = useTodoStore(addTodoSelector);
    const [todoName, setTodoName] = useState<string>('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (0 === todoName.trim().length) {
            return;
        }

        setTodo({
            id: nanoid(),
            name: todoName,
            isComplete: false
        });
    };

    return (
        <div className={'add-todo'}>
            <form className={'todo-form'} onSubmit={onSubmit}>
                <input
                    type="text"
                    className={'add-todo__input'}
                    value={todoName}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setTodoName(event.target.value)}
                />
                <button type={'submit'}>Add todo</button>
                <button onClick={() => setTodoName('')}>Clear</button>
            </form>
        </div>
    );
};

export default AddTodo;