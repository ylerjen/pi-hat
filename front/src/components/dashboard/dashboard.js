import React from 'react';
import Widget from '../widget/Widget';

export default class Dashboard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            temperature: "29°",
            pressure: "56 Pa",
            humidity: "44%",
        };
    }
    componentDidMount () {
        
    }
    render () {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-sm-3 col-md-6">
                        <Widget customClass="card-primary" title="Temperature" value={this.state.temperature} />
                    </div>
                    <div className="col-sm-3 col-md-6">
                        <Widget customClass="card-success" title="Pressure" value={this.state.pressure} />
                    </div>
                    <div className="col-sm-3 col-md-6">
                        <Widget customClass="card-info" title="Humidity" value={this.state.humidity} />
                    </div>
                    <div className="col-sm-3 col-md-6">
                        <Widget customClass="card-warning" title="Temperature" value="45° "/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Dashboard;