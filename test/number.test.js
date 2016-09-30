var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function numberRestrict() {
    var r = $_.restrict(-11, -10, 10);
    $_.assert('number.restrict(lower)', -10, r);

    var r = $_.restrict(11, -10, 10);
    $_.assert('number.restrict(upper)', 10, r);

    var r = $_.restrict(5, -10, 10);
    $_.assert('number.restrict(inRange)', 5, r);
})();

(function numberInRange() {
    var r = $_.inRange(-11, -10, 10);
    $_.assert('number.inRange(under)', false, r);

    var r = $_.inRange(11, -10, 10);
    $_.assert('number.inRange(over)', false, r);

    var r = $_.inRange(5, -10, 10);
    $_.assert('number.inRange(inRange)', true, r);
})();

(function numberAdd() {
    var r = $_.add(0,0,0,0,1);
    $_.assert('number.add(arg)', 1, r);

    var r = $_.add([1,[1,1]],1,1);
    $_.assert('number.add(array)', 5, r);
})();

(function numberSubtract() {
    var r = $_.subtract(0,0,0,0,1);
    $_.assert('number.subtract(arg)', -1, r);

    var r = $_.subtract([1,[1,1]],1,1);
    $_.assert('number.subtract(array)', -3, r);
})();

(function numberMultiply() {
    var r = $_.multiply(0,0,0,0,1);
    $_.assert('number.multiply(arg)', 0, r);

    var r = $_.multiply([1,[2,2]],1,3);
    $_.assert('number.multiply(array)', 12, r);
})();

(function numberDivide() {
    var r = $_.divide(12, 2, 3, 2);
    $_.assert('number.divide(arg)', 1, r);

    var r = $_.divide([12,[1,2]],1,3);
    $_.assert('number.divide(array)', 2, r);
})();

(function numberChain() {
    var r = $_(100).divide([2, 2], 5).add([1], 1).subtract(1).multiply(3).restrict(0, 20).value();
    $_.assert('number.chain.restrict', 18, r);

    var r = $_(100).divide([2, 2], 5).add([1], 1).subtract(1).multiply(3).restrict(0, 15).value();
    $_.assert('number.chain.restrict', 15, r);

    var r = $_(100).divide([2, 2], 5).add([1], 1).subtract(1).multiply(3).inRange(0, 20).value();
    $_.assert('number.chain.inRange', true, r);

    var r = $_(100).divide([2, 2], 5).add([1], 1).subtract(1).multiply(3).inRange(0, 15).value();
    $_.assert('number.chain.inRange', false, r);
})();