const CalendarModel = require('../models/calendar-model')
const TokenService = require('./token-service')
const UserModel = require('../models/user-model')
const CalendarDto = require('../dtos/calendar-dtos')
const { isObjectIdOrHexString } = require('mongoose')
const uuid = require('uuid')
const mailService = require('./mail-service')

class CalendarService {
    async newCalendar(title, color, refreshToken){
        // const creator = await UserModel.findOne({refreshToken})
        const userDto = TokenService.validateRefreshToken(refreshToken)
        const inviteLink = uuid.v4()
        const calendar = await CalendarModel.create({title: title, color: color, owner: userDto.id, inviteLink: inviteLink})
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
        const calendar = await CalendarModel.find({"owner": userDto.id})
        console.log(calendar)
        //console.log(post)
        return calendar
    }
    async getMembers(id, refreshToken){
        const userDto =  TokenService.validateRefreshToken(refreshToken)
        const owner = await UserModel.findById(userDto.id)
        const members_id = await CalendarModel.find({_id: id}).select('members')

        console.log(members_id.members)
        //console.log(members_id)
        let members = []
        members.push(owner)
        
        for(let i = 0;i < members_id.length; i++){
            const candidate  = await UserModel.findById(members_id[i].members)
            members.push(candidate)
        };
        
        return members
    }
    async addNewMember(id){
        const inviteLink = await CalendarModel.findById(id).inviteLink
        //const response = mailService.sendInvite(email, inviteLink)
        return inviteLink
    }
    async deleteMember(id, login){
        const member = await CalendarModel.updateOne({_id: id}, {pull: {members: login}})
        return member
    }

}

module.exports = new CalendarService()
