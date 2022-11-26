const moment = require("moment")

class CalendarService {

    constructor() {
        moment.updateLocale('en', { week: { dow: 1 } })
        const startDay = moment().startOf('month').startOf('week')
        const endDay = moment().endOf('month').endOf('week')
        const calendar = [];
        const nowDay = startDay.clone()
        while (!nowDay.isAfter(endDay)) {
            calendar.push(nowDay.clone())
            nowDay.add(1, 'day')
        }
        return calendar
    }
}
module.exports = new CalendarService()