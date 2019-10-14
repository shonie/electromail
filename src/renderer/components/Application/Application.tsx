import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as theme from './Application.scss';
import { ApplicationProps } from './types';
import Letter from '../../containers/Letter';
import Sidebar from '../../containers/Sidebar';
import Previews from '../../containers/Previews';

function Application({ fetchLetters, clearMailbox }: ApplicationProps) {
    React.useEffect(() => {
        fetchLetters();

        return () => {
            clearMailbox();
        };
    });

    return (
        <div className={theme.app}>
            <Sidebar />
            <Previews />
            <Letter />
        </div>
    );
}

export default hot(Application);
