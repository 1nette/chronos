const CalendarModel = require('../models/calendar-model')
const TokenService = require('./token-service')
const UserModel = require('../models/user-model')
const CalendarDto = require('../dtos/calendar-dtos')
const { isObjectIdOrHexString } = require('mongoose')

class CalendarService {
    async newCalendar(title, color, refreshToken){
        // const creator = await UserModel.findOne({refreshToken})
        const userDto = TokenService.validateRefreshToken(refreshToken)
        console.log(userDto.id)
        const calendar = await CalendarModel.create({title: title, color: color, owner: userDto.id})
        const calendarDto = new CalendarDto(calendar)
        return {calendar: calendarDto}
    }
    async removeCalendar(id, refreshToken){
        const userDto = TokenService.validateRefreshToken(refreshToken)
        console.log(id)
        const candidate = await CalendarModel.findById(id)
        console.log(candidate)
        // if(candidate.owner != userDto.id){
        //     return new Error("U are not owner")
        // }
        const calendarData = await CalendarModel.deleteOne({_id: id})
        return calendarData
    }
    async getCalendar(refreshToken){
        console.log(refreshToken)
        const userDto =  TokenService.validateRefreshToken(refreshToken)
        console.log(userDto)
        const calendar = await CalendarModel.find({owner: userDto.id})
        console.log(calendar)
        //console.log(post)
        return calendar
    }
    async getMembers(id, refreshToken){
        const userDto =  TokenService.validateRefreshToken(refreshToken)
        const owner = CalendarModel.find({owner: userDto.id})
        const members_id = CalendarModel.findById(id).members
        let members = []
        members.push(owner)
        if(members_id){
            members_id.array.forEach(async element => {
                members.push(await UserModel.findById(element))
            });
        }
        
        return members
    }
}

module.exports = new CalendarService()
