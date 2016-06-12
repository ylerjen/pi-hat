import React from 'react';

console.info('Navbar');

export default class Navbar extends React.Component {
  render () {
    return (
        <nav className="navbar navbar-light bg-faded">
            <div className="nav navbar-nav">
                <a className="nav-item nav-link active" href="#">Dashboard <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Speaker</a>
                <a className="nav-item nav-link" href="#">About</a>
            </div>
        </nav>
    );
  }
}

module.exports = Navbar;