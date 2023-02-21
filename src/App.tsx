import { css } from '@emotion/react';
import { FC } from 'react';
import './App.css';

const App: FC = (): JSX.Element => {
    return (
        <div className="App">
            <div css={css({
                fontSize: '4rem',
                textAlign: 'center',
            })}>
                👋🌭
            </div>
        </div>
    );
};

export default App;
