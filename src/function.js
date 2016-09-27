    $_.once = function(func) {
        var ran = false, result;
        return function() {
            if(ran) return result;
            ran = true;
            result = func.apply(this, arguments);
            return result;
        };
    };