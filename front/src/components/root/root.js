//var React = require('react');
//var Navbar = require('../navbar/Navbar');

console.info('root');

var Root = React.createClass({
    render: () => {
        return (
            <div>
                <Navbar/>
                <main>This is the content</main>
            </div>
        );
    }
});

//module.exports = Root;