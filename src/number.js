    /**
     * Restricts a number to specified bounds.
     * @param {number} num - Number to restrict.
     * @param {number} lower - Lower bound.
     * @param {number} upper - Upper bound.
     * @return {number} - The number or the lower or upper bound.
     */
    $_.restrict = function(num, lower, upper) {
        return (
            num >= upper ? upper :
            num <= lower ? lower : num
        );
    };

    /**
     * Checks if a number is in range
     * @param {number} num - Number to check.
     * @param {number} lower - Lower bound.
     * @param {number} upper - Upper bound.
     * @return {boolean} - Whether or not the number is between the range.
     */
    $_.inRange = function(num, lower, upper) {
        return num >= lower && num <= upper;
    };

    /**
     * Add numbers together
     * @param {number} args - Args to add together
     */
    $_.add = function() {
        var a = arguments;
        if(a === void 0) { return; }
        var r = 0;
        for(var i = 0; i < a.length; i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    r = $_.add(r, a[i][j]);
                }
            } else {
                r += a[i];
            }
        }
        return r;
    };

    /**
     * Subtract numbers
     * @param {number} args - Args to subtract
     */
    $_.subtract = function() {
        var a = arguments;
        if(a === void 0 || a.length < 1) { return; }
        var r = a[0];
        for(var i = 1; i < a.length; i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    r = $_.subtract(r, a[i][j]);
                }
            } else {
                r -= a[i];
            }
        }
        return r;
    };

    /**
     * Multiply numbers
     * @param {number} args - Args to multiply
     */
    $_.multiply = function() {
        var a = arguments;
        if(a === void 0 || a.length < 1) { return; }
        var r = a[0];
        for(var i = 1; i < a.length; i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    r = $_.multiply(r, a[i][j]);
                }
            } else {
                r *= a[i];
            }
        }
        return r;
    };

    /**
     * Divide numbers
     * @param {number} args - Args to divide
     */
    $_.divide = function() {
        var a = arguments;
        if(a === void 0 || a.length < 1) { return; }
        var r = a[0];
        for(var i = 1; i < a.length; i++) {
            if($_.isArray(a[i])) {
                for(var j = 0; j < a[i].length; j++) {
                    r = $_.divide(r, a[i][j]);
                }
            } else {
                if(a[i] !== 0) {
                    r *= a[i];
                }
            }
        }
        return r;
    };