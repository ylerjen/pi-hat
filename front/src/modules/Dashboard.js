import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Dashboard from '../components/dashboard/Dashboard';

export default React.createClass({
  render() {
    return <div><Navbar/><Dashboard/></div>
  }
});