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
            <header className="app-header navbar navbar-dark bg-inverse">
                <nav className="nav navbar-nav">
                    <span className="navbar-brand"><img src="assets/img/pirhat-logo.svg" title="PiπHat"/><span>PiπHat</span></span>
                    <a className={"nav-item nav-link "+ (this.state.currentPage === DASHBOARD ? 'active' : '')} href={"#"+DASHBOARD} onClick={this.navigateTo.bind(this,DASHBOARD)}>Dashboard</a>
                    <a className={"nav-item nav-link "+ (this.state.currentPage === SPEECH ? 'active' : '')} href={"#"+SPEECH} onClick={this.navigateTo.bind(this, SPEECH)}>Speech</a>
                    <a className={"nav-item nav-link "+ (this.state.currentPage === ABOUT ? 'active' : '')} href={"#"+ABOUT} onClick={this.navigateTo.bind(this, ABOUT)}>About</a>
                </nav>
            </header>
        );
    }
}