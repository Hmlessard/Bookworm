const dayjs = require('dayjs');

module.exports = {
    format_date: date => {
        // console.log("date from dayjs: " + date)
        return `${dayjs(date).format('MM/DD/YYYY')}`;
    }
}