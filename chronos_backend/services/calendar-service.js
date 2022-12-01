const CalendarModel = require('../models/calendar-model')
const TokenService = require('./token-service')
const CalendarDto = require('../dtos/calendar-dtos')

const ApiError = require('../exceptions/api-error')

const { isObjectIdOrHexString } = require('mongoose')

class CalendarService {
    async newCalendar(title, color, refreshToken) {
        // const creator = await UserModel.findOne({refreshToken})
        const userDto = TokenService.validateRefreshToken(refreshToken)
        console.log(userDto.id)
        const calendar = await CalendarModel.create({ title: title, color: color, owner: userDto.id })
        const calendarDto = new CalendarDto(calendar)
        return { calendar: calendarDto }
    }
    async removeCalendar(id, refreshToken) {
        const userDto = TokenService.validateRefreshToken(refreshToken)
        console.log(id)
        const candidate = await CalendarModel.findById(id)
        console.log(candidate)
        // if(candidate.owner != userDto.id){
        //     return new Error("U are not owner")
        // }
        const calendarData = await CalendarModel.deleteOne({ _id: id })
        return calendarData
    }
    async getCalendar(refreshToken) {
        const userDto = TokenService.validateRefreshToken(refreshToken)
        const calendar = await CalendarModel.find({ "owner": userDto.id })
        return calendar
    }
    async updataCalendar(id, title, color, refreshToken) {
        const userDto = TokenService.validateRefreshToken(refreshToken)
        const calendar = await CalendarModel.findById(id)
        if (calendar.owner.toString() !== userDto.id) {
            throw ApiError.BadRequest('User not owner this calendar')
        } else {
            await CalendarModel.updateOne({ _id: id }, { title: title })
            await CalendarModel.updateOne({ _id: id }, { color: color })

        }
    }
}

module.exports = new CalendarService()
