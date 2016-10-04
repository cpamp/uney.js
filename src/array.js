    function minMax(args, method, comparitor) {
        var a = args;
        if(a === void 0) { return; }
        var r = comparitor(0, Infinity) ? Infinity : -Infinity;
        for(var i = 0; i < a.length; i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    if($_.isArray(a[i][j])) {
                        var val = method(a[i][j]);
                        if(comparitor(val, r)) {
                            r = val;
                        }
                    } else {
                        if(comparitor(a[i][j], r)) {
                            r = a[i][j];
                        }
                    }
                }
            } else if(comparitor(a[i], r)) {
                r = a[i];
            }
        }
        return r;
    }
    
    /**
     * Find the max value in an array.
     * @param {int} arguments - Argument of integers or array of integers to find the max from.
     * @returns {int} - Max value
     */
    $_.findMax = function() {
        return minMax(arguments, $_.findMax, function(a, b) {
            return a > b;
        });
    };

    /**
     * Find the min value in an array.
     * @param {int} arguments - Argument of integers or array of integers to find the min from.
     * @returns {int} - Min value
     */
    $_.findMin = function() {
        return minMax(arguments, $_.findMin, function(a, b) {
            return a < b;
        });
    };

    /**
     * Flatten an array into a single level array
     * @param {any} arguments - Argument of any or array of any to flatten.
     * @returns {array} - Flattened arguments.
     */
    $_.flatten = function() {
        var a = arguments;
        if(a === void 0) { return; }
        var distinct = a[a.length - 1];
        var hasDistinct = true;
        if(distinct !== true && distinct !== false) {
            distinct = false;
            hasDistinct = false;
        }

        var arr = [];
        for(var i = 0; i < a.length - (hasDistinct ? 1 : 0); i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    arr = $_.flatten(arr, a[i][j], distinct);
                }
            } else {
                if(!distinct || (distinct && arr.indexOf(a[i]) === -1)) {
                    arr.push(a[i]);
                }
            }
        }
        return arr;
    };

    /**
     * Check if an array contains a value
     * @param {any} firstArgument - Any or array of any to check for contains values
     * @param {any} arguments - Any or array of any to check if contains
     * @returns {boolean} - If firstArgument contains all arguments.
     */
    $_.contains = function() {
        var a = arguments;
        if(a === void 0) { return; }
        var ar = a[0];
        for(var i = 1; i < a.length; i++) {
            var found = false;
            if($_.isArray(a[i])) {
                for(var j = 0; j < ar.length; j++) {
                    if($_.contains(ar, a[i][j])) {
                        found = true;
                        break;
                    }
                }
            } else {
                for(var j = 0; j < ar.length; j++) {
                    if($_.isArray(ar[j])) {
                        if($_.contains(ar[j], a[i])) {
                            found = true;
                            break;
                        }
                    } else {
                        if(ar[j] === a[i]) {
                            found = true;
                            break;
                        }
                    }
                }
            }
            if(!found) return false;
        }
        return true;
    }

    /**
     * Filter values
     * @param {any} arguments - Arguments to filter
     * @param {function} lastArgument - Filter function. Accepts one parameter which is the value up for filter.
     * @returns {array} - Returns array of filtered arguments. Arguments that failed the filter are omitted. Ex: [ arg1, arg2, [arg3]]
     */
    $_.filter = function() {
        var a = arguments;
        if(a === void 0) { return; }
        if(a.length < 2 || typeof a[a.length - 1] !== 'function') { return a[0]; }
        var filter = a[a.length - 1];
        var result = [];
        for(var i = 0; i < a.length - 1; i++) {
            if($_.isArray(a[i])) {
                var tempResult = [];
                for(var j = 0; j < a[i].length; j++) {
                    var val = $_.filter(a[i][j], filter);
                    if(val.length === 1) { tempResult.push(val[0]); }
                    else if(val.length !== 0) { tempResult.push; }
                }
                result.push(tempResult);
            } else {
                if(filter(a[i])) {
                    result.push(a[i]);
                }
            }
        }
        return result;
    };