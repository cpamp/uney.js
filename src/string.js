    $_.formatString = function() {
        var a = arguments;
        if(a === void 0 || a.length === 0) return;
        var str = a[0];
        for(var i = 1; i < a.length; i++) {
            str = str.replace(new RegExp('\\$\\{' + (i - 1) + '\\}', 'g'), a[i]);
        }
        return str;
    };

    $_.replace = function(str, search, replace) {
        return str.replace(search, replace);
    };

    $chain.prototype.replace = function(search, replace) {
        this.val = $_.replace(this.val, search, replace);
        return this;
    };