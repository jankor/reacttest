'use strict';

var React = require('react');
var RestaurantsContainer = require('./RestaurantsContainer.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <RestaurantsContainer />
            </div>
        );
    }
});

module.exports = App;
