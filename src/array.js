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
    
    $_.findMax = function() {
        return minMax(arguments, $_.findMax, function(a, b) {
            return a > b;
        });
    };

    $_.findMin = function() {
        return minMax(arguments, $_.findMin, function(a, b) {
            return a < b;
        });
    };

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