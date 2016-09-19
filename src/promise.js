var $_ = (function($_) {
    'use strict';

    var $states = {
        pending:    0
        ,resolved:  1
        ,rejected:  2
    };

    /**
     * Constructor
     * @param {function} callback - Promise callback. Params (resolve, reject)
     */
    function $promise(callback) {
        this.state = $states.pending;
        this.data = void 0;
        this.deferred = void 0;
        var self = this;
        callback(function(data) { self.resolve(data, self); }, 
                 function(data) { self.reject(data, self); });
    }

    /**
     * Handle promise
     */
    $promise.prototype.handle = function(deferred, self) {
        if(self.state === $states.pending) {
            self.deferred = deferred;
            return;
        }

        setTimeout(function() {
            var callback;
            if(self.state === $states.resolved) {
                callback = deferred.$$resolved;
            } else if(self.state === $states.rejected) {
                callback = deferred.$$rejected;
            }

            if(!callback) {
                if(self.state === $states.resolved) {
                    deferred.$$resolve(self.data);
                } else if(self.state === $states.rejected) {
                    deferred.$$reject(self.data);
                }
            } else {
                try {
                    var r = callback(self.data);
                    deferred.$$resolve(r);
                } catch(e) {
                    deferred.$$reject(e);
                }
            }
        }, 1);
    };

    $promise.prototype.resolve = function(data, self) {
        try {
            if(data && typeof data.then === 'function') {
                data.then(function(data) { self.resolve(data, self); },
                          function(data) { self.reject(data, self); });
                return;
            }

            self.data = data;
            self.state = $states.resolved;
            if(self.deferred) {
                self.handle(self.deferred, self);
            }
        } catch(e) {
            self.reject(e, self);
        }
    };

    $promise.prototype.reject = function(data, self) {
        self.data = data;
        self.state = $states.rejected;
        if(self.deferred) {
            self.handle(self.deferred, self);
        }
    };

    $promise.prototype.then = function(resolved, rejected, self) {
        var self = this;
        return new $promise(function(resolve, reject) {
            self.handle({
                $$resolved: resolved
                ,$$rejected: rejected
                ,$$resolve: resolve
                ,$$reject: reject
            }, self);
        });
    };

    $promise.prototype.done = function(resolved, rejected, self) {
        self.handle({
            $$resolved: resolved
            ,$$rejected: rejected
            ,$$resolve: self.resolve
            ,$$reject: self.reject
        }, self);
    };

    $_.prototype.promise = function(callback) {
        var p = new $promise(callback);
        return {
            then: function(resolve, reject) {
                p.then(resolve, reject, p);
            },
            done: function(resolve, reject) {
                p.done(resolve, reject, p);
            }
        };
    };

    return $_;
})($_ || function(){});