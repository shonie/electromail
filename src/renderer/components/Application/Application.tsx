import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as theme from './Application.scss';
import Letter from '../../containers/Letter';
import Sidebar from '../../containers/Sidebar';

function Application() {
    return (
        <div className={theme.app}>
            <Sidebar />
            <Letter />
        </div>
    );
}

export default hot(Application);
