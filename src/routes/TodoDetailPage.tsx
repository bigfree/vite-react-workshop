import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTodoStore, { TodoStoreState } from '../store/TodoStoreState';

const TodoDetailPage: FC = (): JSX.Element => {
    const {todoId} = useParams<{ todoId: string }>();
    const todo = useTodoStore((state: TodoStoreState) => state.getTodo(todoId ?? ''));

    if (!todo) {
        return <div>Todo doesnt exist</div>
    }

    return (
        <div>
            <h1>{todo.name}</h1>
            <hr/>
            <pre>
                {JSON.stringify(todo, null, 4)}
            </pre>
        </div>
    );
};

export default TodoDetailPage;