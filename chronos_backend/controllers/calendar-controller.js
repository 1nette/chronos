const CalendarService = require("../services/calendar-service")

class CalendarController {
    async newCalendar(req, res, next) {
        try {
            const { title, color } = req.body
            console.log(req)
            const refreshToken = req.cookies.refreshToken
            const calendar = await CalendarService.newCalendar(title, refreshToken, color)
            return res.json(calendar)
            //const response = async 
        } catch (e) {
            console.log(e)
        }
    }

    async getCalendar(req, res, next) {
        try {
            const refreshToken = req.cookies.refreshToken
            const calendar = await CalendarService.getCalendar(refreshToken)
            return res.json(calendar)
        } catch (e) {
            console.log(e)
        }
    }

    async removeCalendar(req, res, next) {
        try {
            const { id } = req.body
            const refreshToken = req.cookies.refreshToken
            const calendarData = await CalendarService.removeCalendar(id, refreshToken)
            return res.json(calendarData)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CalendarController()