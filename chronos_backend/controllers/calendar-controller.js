const CalendarService = require("../services/calendar-service")

class CalendarController {
    async newCalendar(req, res, next) {
        try {
            const { title, color } = req.body
            const refreshToken = req.cookies.refreshToken
            const calendar = await CalendarService.newCalendar(title, color, refreshToken)
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
            const { id } = req.params
            console.log(id)
            const refreshToken = req.cookies.refreshToken
            const calendarData = await CalendarService.removeCalendar(id, refreshToken)
            return res.json(calendarData)
        } catch (e) {
            console.log(e)
        }
    }

    async getMembers(req, res, next){
        try{
            const { id } = req.body
            const refreshToken = req.cookies.refreshToken
            const members = await CalendarService.getMembers(id, refreshToken)
            console.log(members)
            return res.json(members)
        } catch(e){
            console.log(e)
        }
    }
    
    async updataCalendar(req, res, next) {
        try {
            const { id, title, color } = req.body
            const refreshToken = req.cookies.refreshToken
            await CalendarService.updataCalendar(id, title, color, refreshToken)
            res.status(200).send("OK");
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CalendarController()