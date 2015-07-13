'use strict';

var React = require('react');
var RestaurantStore = require('../stores/RestaurantStore');

var RestaurantForm = React.createClass({

    render: function () {
        var restaurants = this.props.restaurants;

        return (
            <div>
                <input type="text" name="fname" onChange={this.handleChange} />
            </div>
        );
    },

    handleChange: function () {
        t = this.state.input;
        RestaurantStore.setTitle(t);

    }
});

module.exports = RestaurantForm;
