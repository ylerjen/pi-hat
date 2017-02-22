import React from 'react';

const DASHBOARD = 'dashboard';
const SPEECH = 'speech';
const ABOUT = 'about';

export default class Navbar extends React.Component {
    constructor (props) {        
        super(props);
        var _self = this;
        this.state = {currentPage: DASHBOARD};
    }
    navigateTo (pageName, proxy, other, evt) {
        this.setState({ currentPage: pageName });
    }
    render () {
        return (
            <nav className="app-header navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="navbar-brand mb-0" ><img src="assets/img/pirhat-logo.svg" title="PiπHat"/> PiπHat</h1>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item "+ (this.state.currentPage === DASHBOARD ? 'active' : '')}>
                            <a className="nav-link" href={"#"+DASHBOARD} onClick={this.navigateTo.bind(this,DASHBOARD)}>Dashboard</a>
                        </li>
                        <li className={"nav-item "+ (this.state.currentPage === SPEECH ? 'active' : '')}>
                            <a className="nav-link" href={"#"+SPEECH} onClick={this.navigateTo.bind(this, SPEECH)}>Speech</a>
                        </li>
                        <li className={"nav-item "+ (this.state.currentPage === ABOUT ? 'active' : '')}>
                            <a className="nav-link" href={"#"+ABOUT} onClick={this.navigateTo.bind(this, ABOUT)}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}