import React from 'react';
import Navbar from '../navbar/Navbar';
import Dashboard from '../dashboard/Dashboard';
import Speech from '../speech/Speech';

export default class Root extends React.Component {
    render () {
        return (
            <div>
                <Navbar/>
                <Dashboard/>
                <Speech/>
            </div>
        );
    }
}
