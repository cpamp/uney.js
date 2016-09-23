var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function dateToString() {
    var date = new Date('December 3, 1809 06:05:00');
    var str = $_.dateToString(date, 'y yy yyy yyyy t tt s ss M MM MMM MMMM m mm H HH h hh d dd ddd dddd');
    
    $_.assert('dateToString()', '9 09 809 1809 A AM 0 00 12 12 Dec December 5 05 6 06 6 06 3 03 Sun Sunday', str);
})();