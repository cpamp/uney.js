var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function stringFormatString() {
    var str = "This is ${0} ${1} ${4}";

    var r = $_.formatString(str, 'an', 'amazing');
    $_.assert('string.formatString(shortArgs)', 'This is an amazing ${4}', r);

    var r = $_.formatString(str, 'an', 'amazing', 'not', 'used', 'string');
    $_.assert('string.formatString(rightArgs)', 'This is an amazing string', r);

    var r = $_.formatString(str);
    $_.assert('string.formatString(noArgs)', str, r);
})();