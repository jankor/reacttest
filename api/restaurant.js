/**
 * Mocking client-server processing
 */
'use strict';

var Restaurant = exports;

var _restaurants = require('./restaurants.json');

var TIMEOUT = 100;

Restaurant.getRestaurants = function (cb, timeout) {
    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb(_restaurants);
    }, timeout);
};
