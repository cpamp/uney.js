var $_ = (function($_) {
    'use strict';

    function errorVerb(verb) {
        return 'Invalid http verb: ' + verb;
    }

    function checkVerb(verb) {
        if(verb !== 'GET'
        && verb !== 'POST'
        && verb !== 'PUT'
        && verb !== 'PATCH'
        && verb !== 'DELETE') {
            return errorVerb(verb);
        }
    }

    $_.prototype.http = function(options) {
        var self = this;
        return this.promise(function(resolve, reject) {
            if(!options) return;
            if(options.method && self.isString(options.method)) {
                options.method = options.method.toUpperCase();
                var err = checkVerb(options.method);
                if(err) { reject(err); };
            } else {
                var err = errorVerb();
                if(err) { reject(err); }
            }

            if(!options.url || !self.isString(options.url)) {
                reject('Invalid http url: ' + options.url);
            }

            var http = new XMLHttpRequest();

            http.onreadystatechange = function() {
                if(http.readyState === 4) {
                    var response = { status: http.status }
                    var json = self.jsonTryParse(http.response)
                    if(json) {
                        response.data = json;
                    } else {
                        response.data = http.responseText;
                    }

                    if(http.status === 200) {
                        resolve(response);
                    } else {
                        reject()
                    }
                }
            };

            http.open(options.method, options.url);

            http.setRequestHeader('Content-Type', 'text/plain');

            if(self.isObject(options.headers)) {
                for(key in options.headers) {
                    if(options.headers.hasOwnProperty(key)) {
                        http.setRequestHeader(key, options.headers[key]);
                    }
                }
            }

            http.send(options.data);
        });
    }

    return $_;
})($_ || function(){});