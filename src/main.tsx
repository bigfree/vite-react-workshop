import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
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
}, {
    path: '/404',
    element: <div>404 page</div>
}]);

const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchInterval: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </QueryClientProvider>
    </React.StrictMode>,
);
