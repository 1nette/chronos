const CalendarModel = require('../models/calendar-model')
const TokenService = require('./token-service')
const CalendarDto = require('../dtos/calendar-dtos')
const { isObjectIdOrHexString } = require('mongoose')

class CalendarService {
    async newCalendar(title, refreshToken){
        // const creator = await UserModel.findOne({refreshToken})
        const userDto = TokenService.validateRefreshToken(refreshToken)
        console.log(userDto.id)
        const calendar = await CalendarModel.create({title: title, owner: userDto.id})
        const calendarDto = new CalendarDto(calendar)
        return {calendar: calendarDto}
    }
    async removeCalendar(id, refreshToken){
        const userDto = TokenService.validateRefreshToken(refreshToken)
        console.log(id)
        const candidate = await CalendarModel.findById(id)
        console.log(candidate)
        if(candidate.owner != userDto.id){
            return new Error("U are not owner")
        }
        const calendarData = await CalendarModel.deleteOne({_id: id})
        return calendarData
    }
    async getCalendar(refreshToken){
        console.log(refreshToken)
        const userDto = TokenService.validateRefreshToken(refreshToken)
        console.log(userDto)
        const calendar = await CalendarModel.find({"owner": userDto.id})
        console.log(calendar)
        //console.log(post)
        return calendar
    }
}

module.exports = new CalendarService()
