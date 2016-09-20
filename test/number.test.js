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