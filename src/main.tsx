import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import HomeIndex from './routes/HomeIndex';
import TodoDetailPage from './routes/TodoDetailPage';

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        index: true,
        element: <HomeIndex/>,
    }, {
        path: ':todoId',
        element: <TodoDetailPage/>,
    }],
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
