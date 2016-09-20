var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function httpHttp() {
    console.log('Begin Request-1');
    $_.http({
        method: 'get',
        url: 'http://jsonplaceholder.typicode.com/posts'
    }).then(function(data) {
        console.log(data);
    }, function(err) {
        console.log(err);
    });
    console.log('End Request-1');

    
})();