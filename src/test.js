var $_ = (function($_) {
    'use strict';

    /**
     * Test equality of two values. Outputs error to console on fail.
     * @param {string} name - Name of assertion.
     * @param {any} expected - Expected value.
     * @param {any} actual - Actual value.
     */
    $_.assert = function(name, expected, actual) {
        if(expected !== actual) {
            console.error('FAIL: ' + name);
        } else {
            console.log('PASS: ' + name);
        }
    };

    return $_
;
})($_ || {});