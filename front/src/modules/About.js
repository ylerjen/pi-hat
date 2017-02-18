import React from 'react';
import Navbar from '../components/navbar/Navbar';

export default React.createClass({
  render() {
    return <div>
        <header>
            <Navbar/>
        </header>
        <main className="container">
            <h1>About</h1>
            <p>The PirHat application is a simple app to interact with your Raspberry Pi Sense Hat. It provides informations from the sensors and allow you to interact with the LED display</p>
        </main>
        </div>
  }
});