import { css } from '@emotion/react';
import { FC, Fragment } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CatResponse, useCat } from '../resources/ApiResource';
import useTodoStore, { TodoStoreState } from '../store/TodoStoreState';

const TodoDetailPage: FC = (): JSX.Element => {
    const {todoId} = useParams<{ todoId: string }>();
    const todo = useTodoStore((state: TodoStoreState) => state.getTodo(todoId ?? ''));

    if (!todo) {
        return <Navigate to={'/404'} replace={true}/>;
    }

    const {data, isLoading, isFetching} = useCat(todoId ?? '');

    return (
        <div>
            <h1>{todo?.name}</h1>
            <hr/>
            <pre>
                {JSON.stringify(todo, null, 4)}
            </pre>
            <hr/>
            {isLoading || isFetching ? (
                <div>Loading cat</div>
            ) : (
                <Fragment>
                    {data?.map((cat: CatResponse) => (
                        <Fragment>
                            <img css={css({
                                maxWidth: '400px',
                            })} src={cat?.url} alt=""/>
                            <pre>{JSON.stringify(cat, null, 4)}</pre>
                        </Fragment>
                    ))}
                </Fragment>
            )}
        </div>
    );
};

export default TodoDetailPage;