var $_ = (function($_) {
    'use strict';

    /**
     * Deep clone an object.
     * @param {object} obj - Obj to clone.
     * @return {object} - Cloned object.
     */
    $_.clone = function(obj) {
        if(obj == null || !$_.isObject(obj)) {
            return obj;
        }

        var result = obj.constructor();
        for(key in obj) {
            result[key] = $_.clone(obj[key]);
        }
        return result;
    };

    return $_;
})($_ || {});