var $_ = (function($_) {
    'use strict';

    /**
     * Deep clone an object.
     * @param {object} obj - Obj to clone.
     * @return {object} - Cloned object.
     */
    $_.prototype.clone = function(obj) {
        if(obj == null || !this.isObject(obj)) {
            return obj;
        }

        var result = obj.constructor();
        for(key in obj) {
            result[key] = this.clone(obj[key]);
        }
        return result;
    };

    return $_;
})($_ || {});