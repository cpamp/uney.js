if(require !== void 0) {
    var $_ = new(require('../dist/uney.js'))();
}

(function compareEquals() {
    var a = {
        a: 'a',
        b: 'b'
    };

    var b = {
        a: 'a',
        b: 'b'
    };

    var c = b;

    var d = {
        a: 'b',
        b: 'a'
    }

    var r = $_.equals(a, b);
    $_.assert('compare.equals(ref) -> false', false, r);

    var r = $_.equals(b, c);
    $_.assert('compare.equals(ref) -> true', true, r);

    var r = $_.equals(a, d, ['a', 'b']);
    $_.assert('compare.equals(value) -> false', false, r);

    var r = $_.equals(a, b, ['a', 'b']);
    $_.assert('compare.equals(value) -> true', true, r);
})();