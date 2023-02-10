import { enableMapSet } from 'immer';
import { FC } from 'react';
import './App.css';
import Todo from './components/todo/Todo';

enableMapSet();

const App: FC = (): JSX.Element => {
    return (
        <div className="App">
            <Todo/>
        </div>
    );
};

export default App;
