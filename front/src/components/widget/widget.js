import './widget.scss'; //css import for webpack

import React from 'react';

export default class widget extends React.Component {
  render () {
    return (
        <section className={`widget card card-inverse ${ this.props.customClass } `}>
            <h1 className="widget__title">{this.props.title}</h1>
            <button className="widget__global-action vibrate-hover">
                <i className="icon icon-repeat"></i>
            </button>
            <div className="widget__value">{this.props.value}</div>
        </section>
    );
  }
}

module.exports = widget;