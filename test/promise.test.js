var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function promises() {
    $_.promise(function(resolve, reject) {
        console.log('Begin Promise-1');
        setTimeout(function() { resolve('Promise-1 Resolved'); }, 5000);
    }).then(function(data) {
        console.log(data);
    });
    console.log('After Promise-1');

    $_.promise(function(resolve, reject) {
        console.log('Begin Promise-2');
        setTimeout(function() { 
            resolve($_.promise(function(resolve, reject) {
                resolve('Promise-2 Resolved');
            }));
        }, 2000);
    }).then(function(data) {
        console.log(data);
    });
    console.log('After Promise-2');
})();