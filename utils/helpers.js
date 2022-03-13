const dayjs = require('dayjs');

module.exports = {
    format_date: date => {
        // console.log(date)
        return `${dayjs().format('MM/DD/YYYY')}`;
    }
}