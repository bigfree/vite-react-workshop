import React, { FC } from 'react';
import AddTodo from './add-todo/AddTodo';
import TodoList from './todo-list/TodoList';

const Todo: FC = (): JSX.Element => {
    return (
        <div>
            <AddTodo/>
            <TodoList/>
        </div>
    );
};

export default Todo;