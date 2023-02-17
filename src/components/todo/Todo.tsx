import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import AddTodo from './add-todo/AddTodo';
import TodoList from './todo-list/TodoList';

const Todo: FC = (): JSX.Element => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Todo;