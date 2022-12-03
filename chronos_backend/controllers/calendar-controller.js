const CalendarService = require("../services/calendar-service")


class CalendarController {
    async newCalendar(req, res, next){
        try{
            const {title, color} = req.body
            const refreshToken = req.cookies.refreshToken
            const calendar = await CalendarService.newCalendar(title, color, refreshToken)
            return res.json(calendar)
            //const response = async 
        } catch(e){
            console.log(e)
        }
    }
    
    async getCalendar(req, res, next){
        try{
            const refreshToken = req.cookies.refreshToken
            const calendar = await CalendarService.getCalendar(refreshToken)
            return res.json(calendar)
        } catch(e) {
            console.log(e)
        }
    }

    async removeCalendar(req, res, next){
        try{
            const { id } = req.body
            const refreshToken = req.cookies.refreshToken
            const calendarData = await CalendarService.removeCalendar(id, refreshToken)
            return res.json(calendarData)
        } catch(e) {
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

    async addNewMember(req, res, next){
        try{
            const {id, email} = req.body
            const refreshToken = req.cookies.refreshToken
            const inviteInfo = 
        } catch(e){
            console.log(e)
        }
    }
}

module.exports = new CalendarController()