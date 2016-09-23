var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function arrayFindMax() {
    var r = $_.findMax([1, 2, 3, [4]], 0, -4);
    $_.assert('array.findMax(array)', 4, r);

    var r = $_.findMax([1, [2, 3, 4]], 0, -4);
    $_.assert('array.findMax(2dArray)', 4, r);

    var r = $_.findMax([1,2,3,4], 0, 5);
    $_.assert('array.findMax(arg)', 5, r);
})();

(function arrayFindMin() {
    var r = $_.findMin([4, 3, 2, [1]], 10, 11);
    $_.assert('array.findMin(array)', 1, r);

    var r = $_.findMin([4, [3, 2, 1]], 10, 11);
    $_.assert('array.findMin(2dArray)', 1, r);

    var r = $_.findMin([4, [3, 2, 1]], 0, 11);
    $_.assert('array.findMin(args)', 0, r);
})();

(function arrayFlatten() {

    var arr = [1,2,3,4];

    function testFlat(arr, ar) {
        for(var i = 0; i < arr.length; i++) {
            if(ar[i] !== arr[i]) {
                return false;
            }
        }
        return true;
    }

    var result = $_.flatten([1, [2,[3]]], 4);
    var r = testFlat(result, arr);
    $_.assert('array.flatten()', true, r);

    var result = $_.flatten([1, [2,[2,3],4,4,2]], true);
    var r = testFlat(result, arr);
    $_.assert('array.flatten(distinct)', true, r);
})();

(function arrayContains() {
    var ar = [1, [2, [3, 4]], 5];

    var r = $_.contains(ar, 1, [2, [3]], 4);
    $_.assert('array.contains(true)', true, r);

    var r = $_.contains(ar, 1, 5, 0);
    $_.assert('array.contains(false)', false, r);
})();