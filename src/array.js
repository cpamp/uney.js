var $_ = (function($_) {
    'use strict';

    $_.findMax = function() {
        if(arguments === void 0) { return; }
        var max = -Infinity;
        for(var i = 0; i < arguments.length; i++) {
            if($_.isArray(arguments[i])) {
                for(var j = 0; j < arguments[i].length; j++) {
                    if($_.isArray(arguments[i][j])) {
                        var val = $_.findMax(arguments[i][j]);
                        if(val > max) {
                            max = val;
                        }
                    } else {
                        if(arguments[i][j] > max) {
                            max = arguments[i][j];
                        }
                    }
                }
            } else if(arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    };

    $_.findMin = function() {
        if(arguments === void 0) { return; }
        var min = Infinity;
        for(var i = 0; i < arguments.length; i++) {
            if($_.isArray(arguments[i])) {
                for(var j = 0; j < arguments[i].length; j++) {
                    if($_.isArray(arguments[i][j])) {
                        var val = $_.findMin(arguments[i][j]);
                        if(val < min) {
                            min = val;
                        }
                    } else {
                        if(arguments[i][j] < min) {
                            min = arguments[i][j];
                        }
                    }
                }
            } else if(arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    };

    $_.flatten = function() {
        if(arguments === void 0) { return; }
        var distinct = arguments[arguments.length - 1];
        var hasDistinct = true;
        if(distinct !== true && distinct !== false) {
            distinct = false;
            hasDistinct = false;
        }

        var arr = [];
        for(var i = 0; i < arguments.length - (hasDistinct ? 1 : 0); i++) {
            if($_.isArray(arguments[i])) {
                for(var j = 0; j < arguments[i].length; j++) {
                    arr = $_.flatten(arr, arguments[i][j], distinct);
                }
            } else {
                if(!distinct || (distinct && arr.indexOf(arguments[i]) === -1)) {
                    arr.push(arguments[i]);
                }
            }
        }
        return arr;
    };

    return $_;
})($_ || {});