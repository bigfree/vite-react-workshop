import { FC, Fragment } from 'react';
import AddTodo from '../components/todo_completed/add-todo/AddTodo';
import TodoList from '../components/todo_completed/todo-list/TodoList';

const HomeIndex: FC = (): JSX.Element => {
    return (
        <Fragment>
            <AddTodo/>
            <TodoList/>
        </Fragment>
    );
};

export default HomeIndex;