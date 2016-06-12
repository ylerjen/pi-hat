import React from 'react';
import Navbar from '../navbar/Navbar';

console.info('root');

export default class Root extends React.Component {
    render () {
        return (
            <div>
                <Navbar/>
                <main>This is the content</main>
            </div>
        );
    }
}
