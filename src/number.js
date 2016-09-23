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