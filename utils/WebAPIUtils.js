'use strict';

var shop = require('../../../common/api/shop');
var restaurant = require('../../../common/api/restaurant');
var ActionCreators = require('../actions/ActionCreators');

module.exports = {
    getAllProducts: function () {
        shop.getProducts(function (products) {
            ActionCreators.receiveProducts(products);
        });
    },

    checkoutProducts: function (products) {
        shop.buyProducts(products, function () {
            ActionCreators.finishCheckout(products);
        });
    },

    getAllRestaurants: function () {
        restaurant.getRestaurants(function (restaurants) {
            ActionCreators.receiveRestaurants(restaurants);
        });
    },
};
