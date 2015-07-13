'use strict';

var React = require('react');
var RestaurantItem = require('./RestaurantItem.jsx');
var RestaurantsList = require('./RestaurantsList.jsx');
var RestaurantForm = require('./RestaurantForm.jsx');
var RestaurantStore = require('../stores/RestaurantStore');
var ActionCreators = require('../actions/ActionCreators');

function _getStateFromStores () {
  console.log('rstate');
  return RestaurantStore.getState();
}

var RestaurantItemContainer = React.createClass({
    render: function () {
        return (
            <RestaurantItem restaurant={this.props.restaurant} />
        );
    }
});

var RestaurantsListContainer = React.createClass({
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentDidMount: function () {
        RestaurantStore.listen(this._onChange);
    },

    componentWillUnmount: function () {
        RestaurantStore.unlisten(this._onChange);
    },

    render: function () {
        var nodes = this.state.restaurants.map(function (restaurant) {
            return <RestaurantItemContainer key={restaurant.id} restaurant={restaurant} />;
        });

        return (
            <RestaurantsList title="Hungryhouse search postcode result">
                <RestaurantForm restaurants={this.state.restaurants}/>
                {nodes}
            </RestaurantsList>
        );
    },

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = RestaurantsListContainer;
