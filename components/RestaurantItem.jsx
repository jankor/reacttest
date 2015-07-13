'use strict';

var React = require('react');
var RestaurantItem = React.createClass({
    render: function () {
        var restaurant = this.props.restaurant;

        return (
            <div className="uk-panel uk-panel-box uk-margin-bottom">
                <img className="uk-thumbnail uk-thumbnail-mini uk-align-left" src={restaurant.logo} />
                <h4 className="uk-h4">{restaurant.name}</h4>
                <button className="uk-button uk-button-small uk-button-primary">
                    Detail
                </button>
            </div>
        );
    }
});

module.exports = RestaurantItem;
