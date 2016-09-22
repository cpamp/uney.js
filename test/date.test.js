var window = window || void 0;
if(!window && require) {
    var $_ = require('../dist/uney.js');
}

(function dateToString() {
    var date = new Date('December 4, 2100 06:05:00');
    var str = $_.dateToString(date, 'y yy yyy yyyy t tt s ss M MM MMM MMMM m mm H HH h hh d dd ddd dddd');
    console.log(str);
})();