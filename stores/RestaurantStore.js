'use strict';

var alt = require('../alt');

var ActionCreators = require('../actions/ActionCreators');

class RestaurantStore {
    constructor() {
        this.bindActions(ActionCreators);
        this.restaurants = [];
        this.search = "kw161ll";
    }

    onReceiveRestaurants(restaurants) {
        this.restaurants = restaurants;
    }

    setTitle(title){
      thist.search = title;
    }
}

module.exports = alt.createStore(RestaurantStore, 'RestaurantStore');
