    var days = new Array(7);
    days[0] = 'Sunday';
    days[1] = 'Monday';
    days[2] = 'Tuesday';
    days[3] = 'Wednesday';
    days[4] = 'Thursday';
    days[5] = 'Friday';
    days[6] = 'Saturday';

    var months = new Array(12);
    months[0] = 'January';
    months[1] = 'February';
    months[2] = 'March';
    months[3] = 'April';
    months[4] = 'May';
    months[5] = 'June';
    months[6] = 'July';
    months[7] = 'August';
    months[8] = 'September';
    months[9] = 'October';
    months[10] = 'November';
    months[11] = 'December';

    var $dateFormatter = {

        dddd: function(date) {
            return days[date.getDay()];
        },

        ddd: function(date) {
            return (days[date.getDay()]).substring(0,3);
        },

        dd: function(date) {
            var day = date.getDate();
            return day < 10 ? '0' + day : day;
        },

        d: function(date) {
            return date.getDate();
        },

        hh: function(date) {
            var hour = date.getHours() % 12;
            return hour < 10 ? '0' + hour : hour;
        },

        h: function(date) {
            return date.getHours() % 12;
        },

        HH: function(date) {
            var hour = date.getHours();
            return hour < 10 ? '0' + hour : hour;
        },

        H: function(date) {
            return date.getHours();
        },

        mm: function(date) {
            var minute = date.getMinutes();
            return minute < 10 ? '0' + minute : minute;
        },

        m: function(date) {
            return date.getMinutes();
        },

        MMMM: function(date) {
            return months[date.getMonth()];
        },

        MMM: function(date) {
            return (months[date.getMonth()]).substring(0,3);
        },

        MM: function(date) {
            var month = date.getMonth() + 1;
            return month < 10 ? '0' + month : month;
        },

        M: function(date) {
            return date.getMonth() + 1;
        },

        ss: function(date) {
            var second = date.getSeconds();
            return second < 10 ? '0' + second : second;
        },

        s: function(date) {
            return date.getSeconds();
        },

        tt: function(date) {
            return date.getHours() < 12 ? 'AM' : 'PM';
        },

        t: function(date) {
            return date.getHours() < 12 ? 'A' : 'P';
        },

        yyyy: function(date) {
            return (date.getYear() + 1900).toString();
        },

        yyy: function(date) {
            return (date.getYear() + 1900).toString().substring(1,4);
        },

        yy: function(date) {
            var year = (date.getYear() + 1900) % 100;
            return year < 10 ? '0' + year : year;
        },

        y: function(date) {
            return (date.getYear() + 1900) % 100;
        }
    };

    var formats = [
        'dddd'
        ,'ddd'
        ,'dd'
        ,'d'
        ,'hh'
        ,'h'
        ,'HH'
        ,'H'
        ,'mm'
        ,'m'
        ,'MMMM'
        ,'MMM'
        ,'MM'
        ,'M'
        ,'ss'
        ,'s'
        ,'tt'
        ,'t'
        ,'yyyy'
        ,'yyy'
        ,'yy'
        ,'y'
    ];

    $_.dateToString = function(date, format) {
        var result = format, values = [];
        for(var i = 0; i < formats.length; i++) {
            result = result.replace(new RegExp(formats[i], 'g'), '${' + values.length + '}');
            values.push($dateFormatter[formats[i]](date));
        }
        for(var i = 0; i < values.length; i++) {
            result = result.replace(new RegExp('\\$\\{' + i + '\\}', 'g'), values[i]);
        }
        return result;
    };