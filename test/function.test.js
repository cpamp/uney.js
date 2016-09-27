var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function functionOnce() {
    var func = $_.once(function(a, b, c) {
        console.log(a, b, c);
    });

    for(var i = 0; i < 10; i++) {
        func(1, 2, 3);
    }
})()