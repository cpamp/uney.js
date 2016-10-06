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

    function modify(r, val, func) {
        for(var i = 0; i < val.length; i++) {
            r = func(r, val[i]);
        }
        return r;
    }

    function perform(args, method, mathFunc) {
        var a = args;
        if(a === void 0 || a.length < 1) { return; }
        var r = init(a[0], method);
        for(var i = 1; i < a.length; i++) {
            if($_.isArray(a[i])) {
                r = modify(r, a[i], method);
            } else {
                r = mathFunc(r, a[i]);
            }
        }
        return r;
    }

    /**
     * Add numbers together
     * @param {number} args - Args to add together
     */
    $_.add = function() {
        return perform(arguments, $_.add, function(a, b) {
            return a + b;
        });
    };

    $chain.prototype.add = function() {
        this.val = $_.add(this.val, $_.objToArray(arguments));
        return this;
    };

    /**
     * Subtract numbers
     * @param {number} args - Args to subtract
     */
    $_.subtract = function() {
        return perform(arguments, $_.subtract, function(a, b) {
            return a - b;
        });
    };

    $chain.prototype.subtract = function() {
        this.val = $_.subtract(this.val, $_.objToArray(arguments));
        return this;
    }

    /**
     * Multiply numbers
     * @param {number} args - Args to multiply
     */
    $_.multiply = function() {
        return perform(arguments, $_.multiply, function(a, b) {
            return a * b;
        });
    };

    $chain.prototype.multiply = function() {
        this.val = $_.multiply(this.val, $_.objToArray(arguments));
        return this;
    };

    /**
     * Divide numbers
     * @param {number} args - Args to divide
     */
    $_.divide = function() {
        return perform(arguments, $_.divide, function(a, b) {
            if(b !== 0) {
                return a / b;
            } else {
                return a;
            }
        });
    };

    $chain.prototype.divide = function() {
        this.val = $_.divide(this.val, $_.objToArray(arguments));
        return this;
    };

    $_.random = function(min, max) {
        min = $_.optional(min, 0);
        max = $_.optional(max, 1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }