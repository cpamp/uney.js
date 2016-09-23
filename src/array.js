    $_.findMax = function() {
        var a = arguments;
        if(a === void 0) { return; }
        var max = -Infinity;
        for(var i = 0; i < a.length; i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    if($_.isArray(a[i][j])) {
                        var val = $_.findMax(a[i][j]);
                        if(val > max) {
                            max = val;
                        }
                    } else {
                        if(a[i][j] > max) {
                            max = a[i][j];
                        }
                    }
                }
            } else if(a[i] > max) {
                max = a[i];
            }
        }
        return max;
    };

    $_.findMin = function() {
        var a = arguments;
        if(a === void 0) { return; }
        var min = Infinity;
        for(var i = 0; i < a.length; i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    if($_.isArray(a[i][j])) {
                        var val = $_.findMin(a[i][j]);
                        if(val < min) {
                            min = val;
                        }
                    } else {
                        if(a[i][j] < min) {
                            min = a[i][j];
                        }
                    }
                }
            } else if(a[i] < min) {
                min = a[i];
            }
        }
        return min;
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