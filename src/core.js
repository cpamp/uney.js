(function() {
    'use strict';

    var $chain = function() {
        this.val = [void 0];
    }

    $chain.prototype.value = function() {
        return this.val;
    };

    var $_ = function() {
        if(arguments) {
            var chain = new $chain();
            chain.val = arguments[0];
            return chain;
        }
    };

    $_.noop = function(){};

    /**
     * Turn an array like object to an array.
     * @param {object} args - Array like object to convert to an array.
     */
    $_.objToArray = function(args) {
        return Array.prototype.slice.call(args);
    };

    /**
     * Check if value is not undefined.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is not undefined.
     */
    $_.isDefined = function(value) {
        return value !== void 0;
    };

    /**
     * Check if a value is null. Uses ===
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is null.
     */
    $_.isNull = function(value) {
        return value === null;
    };

    /**
     * Check if a value is an object.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is an object.
     */
    $_.isObject = function(value) {
        return typeof value === 'object';
    };

    /**
     * Check if a value is an array.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is an array.
     */
    $_.isArray = function(arr) {
        return Array.isArray(arr);
    };

    /**
     * Check if a value is a string.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is a string.
     */
    $_.isString = function(value) {
        return typeof value === 'string' || value instanceof String;
    };

    /**
     * Try to parse a json string to an object
     * @param {string} value - Json string to parse
     * @returns {boolean|object} - False if failed, parsed object if passed.
     */
    $_.jsonTryParse = function(value) {
        if(this.isString(value)) {
            try {
                var r = JSON.parse(value);
                return r;
            } catch(e) {
                return false;
            }
        } else {
            return false;
        }
    };

    /**
     * Optional param assignment.
     * @param {any} param - Param to assign.
     * @param {any} value - Default value.
     * @return {any} - param or value.
     */
    $_.optional = function(param, value) {
        if(!this.isDefined(param)) param = value;
        return param;
    };

    /**
     * Loop through an array.
     * @param {array} arr - Array to loop.
     * @param {function} callback - Callback per loop. Return null to break. Params: (item, index).
     * @param {number?} start - Starting index. Default: 0
     * @param {number?} increment - Increment value. Default: 1
     */
    $_.for = function(arr, callback, start, increment) {
        if(start == null || isNaN(start)) { start = 0; }
        if(increment == null || isNaN(increment)) { increment = 1; }
        for(var i = 0; i < arr.length; i += increment) {
            var val = callback(arr[i], i);
            if(val !== void 0) return val;
        }
    };

    $chain.prototype.for = function(callback, start, increment) {
        this.val = $_.for(this.val, callback, start, increment);
        return this;
    };

/**INJECT**/

    var window = window || void 0;
    if(!window && module && module.exports) { module.exports = $_; }
    else if(window) { window.$_ = $_; }
})();