    /**
     * Check if two values are equal.
     * @param {any} value - Left compare.
     * @param {any} compare - Right compare.
     * @param {string? | string[]?} - Keys to compare. Defaults direct comparison.
     * @return {boolean} - Whether the values are equal or not.
     */
    $_.equals = function(value, compare, keys) {
        var self = this, result = true;
        if(keys == null) { return value === compare; }
        if(!this.isArray(keys)) { keys = [keys]; }
        this.for(keys, function(key) {
            if(self.isString(key)) {
                if(value[key] !== compare[key]) {
                    result = false;
                    return null;
                }
            }
        });
        return result;
    };