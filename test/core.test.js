var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function coreIsDefined() {
    var undf;
    var r = $_.isDefined(undf);
    $_.assert('core.isDefined(undefined)', false, r);

    var r = $_.isDefined(null);
    $_.assert('core.isDefined(null)', true, r);

    var r = $_.isDefined('def');
    $_.assert('core.isDefined(defined)', true, r);
})();

(function coreIsNull() {
    var r = $_.isNull(null);
    $_.assert('core.isNull(null)', true, r);

    var r = $_.isNull(void 0);
    $_.assert('core.isNull(undefined)', false, r);
})();

(function coreIsObject() {
    var r = $_.isObject([]);
    $_.assert('core.isObject(array)', true, r);

    var r = $_.isObject({});
    $_.assert('core.isObject(object)', true, r);

    var r = $_.isObject(1);
    $_.assert('core.isObject(number)', false, r);

    var r = $_.isObject('');
    $_.assert('core.isObject(string)', false, r);
})();

(function coreIsArray() {
    var r = $_.isArray([]);
    $_.assert('core.isArray(array)', true, r);

    var r = $_.isArray({});
    $_.assert('core.isArray(object)', false, r);
})();

(function coreIsString() {
    var r = $_.isString('');
    $_.assert('core.isString(string)', true, r);

    var r = $_.isString({});
    $_.assert('core.isString({})', false, r);
})();

(function coreOptional() {
    var und = void 0;
    var undf = undefined;
    var def = null;

    var param = $_.optional(und, 1);
    $_.assert('core.optional(void 0)', true, param === 1);

    var param = $_.optional(undf, 1);
    $_.assert('core.optional(undefined)', true, param === 1);

    var param = $_.optional(def, 1);
    $_.assert('core.optional(defined)', null, param);
})();

(function coreFor() {
    var arr = ['test', 'array', 'here'];
    var newArr = [];

    $_.for(arr, function(item){
        newArr.push(item);
    });

    $_.assert('core.for()', arr[1], newArr[1]);

    var newArr = [];
    $_(arr).for(function(item) {
        newArr.push(item);
    });
    $_.assert('core.chain.for', arr[1], newArr[1]);

    var r = $_.for(arr, function(item, i) {
        if(i === arr.length - 1) {
            return item;
        }
    });
    $_.assert('core.for(returns)', 'here', r);
})();