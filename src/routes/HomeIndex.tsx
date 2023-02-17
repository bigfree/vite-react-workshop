import { FC, Fragment } from 'react';
import AddTodo from '../components/todo/add-todo/AddTodo';
import TodoList from '../components/todo/todo-list/TodoList';

const HomeIndex: FC = (): JSX.Element => {
    return (
        <Fragment>
            <AddTodo/>
            <TodoList/>
        </Fragment>
    );
};

export default HomeIndex;