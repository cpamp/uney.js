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
    
    $chain.prototype.restrict = function(lower, upper) {
        this.val = $_.restrict(this.val, lower, upper);
        return this;
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

    $chain.prototype.inRange = function(lower, upper) {
        this.val = $_.inRange(this.val, lower, upper);
        return this;
    };

    function modify(r, val, func) {
        for(var i = 0; i < val.length; i++) {
            r = func(r, val[i]);
        }
        return r;
    }

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
                r = modify(r, a[i], $_.add);
            } else {
                r += a[i];
            }
        }
        return r;
    };

    $chain.prototype.add = function() {
        this.val = $_.add(this.val, $_.argsToArray(arguments));
        return this;
    };

    function init(val, func) {
        var r = val;
        if($_.isArray(val)) {
            r = val[0];
            for(var i = 1; i < val.length; i++) {
                if($_.isArray(val[i])) {
                    r = func(r, val[i]);
                }
            }
        }
        return r;
    }

    /**
     * Subtract numbers
     * @param {number} args - Args to subtract
     */
    $_.subtract = function() {
        var a = arguments;
        if(a === void 0 || a.length < 1) { return; }
        var r = init(a[0], $_.subtract);
        for(var i = 1; i < a.length; i++) {
            if($_.isArray(a[i])) {
                r = modify(r, a[i], $_.subtract);
            } else {
                r -= a[i];
            }
        }
        return r;
    };

    $chain.prototype.subtract = function() {
        this.val = $_.subtract(this.val, $_.argsToArray(arguments));
        return this;
    }

    /**
     * Multiply numbers
     * @param {number} args - Args to multiply
     */
    $_.multiply = function() {
        var a = arguments;
        if(a === void 0 || a.length < 1) { return; }
        var r = init(a[0], $_.multiply);
        for(var i = 1; i < a.length; i++) {
            if($_.isArray(a[i])) {
                r = modify(r, a[i], $_.multiply);
            } else {
                r *= a[i];
            }
        }
        return r;
    };

    $chain.prototype.multiply = function() {
        this.val = $_.multiply(this.val, $_.argsToArray(arguments));
        return this;
    };

    /**
     * Divide numbers
     * @param {number} args - Args to divide
     */
    $_.divide = function() {
        var a = arguments;
        if(a === void 0 || a.length < 1) { return; }
        var r = init(a[0], $_.divide);
        for(var i = 1; i < a.length; i++) {
            if($_.isArray(a[i])) {
                r = modify(r, a[i], $_.divide);
            } else {
                if(a[i] !== 0) {
                    r /= a[i];
                }
            }
        }
        return r;
    };

    $chain.prototype.divide = function() {
        this.val = $_.divide(this.val, $_.argsToArray(arguments));
        return this;
    };