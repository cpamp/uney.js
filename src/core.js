var $_ = (function($_) {
    'use strict';

    /**
     * Check if value is not undefined.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is not undefined.
     */
    $_.prototype.isDefined = function(value) {
        return value !== void 0;
    };

    /**
     * Check if a value is null. Uses ===
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is null.
     */
    $_.prototype.isNull = function(value) {
        return value === null;
    };

    /**
     * Check if a value is an object.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is an object.
     */
    $_.prototype.isObject = function(value) {
        return typeof value === 'object';
    };

    /**
     * Check if a value is an array.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is an array.
     */
    $_.prototype.isArray = function(arr) {
        return Array.isArray(arr);
    };

    /**
     * Check if a value is a string.
     * @param {any} value - Value to check.
     * @return {boolean} - Whether or not value is a string.
     */
    $_.prototype.isString = function(value) {
        return typeof value === 'string' || value instanceof String;
    };

    $_.prototype.jsonTryParse = function(value) {
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
    }

    /**
     * Optional param assignment.
     * @param {any} param - Param to assign.
     * @param {any} value - Default value.
     * @return {any} - param or value.
     */
    $_.prototype.optional = function(param, value) {
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
    $_.prototype.for = function(arr, callback, start, increment) {
        if(start === null || isNaN(start)) { start = 0; }
        if(increment === null || isNaN(increment)) { increment = 1; }
        for(var i = 0; i < arr.length; i += increment) {
            if(callback(arr[i], i) === null) break;
        }
    };

    return $_;
})($_ || function(){});