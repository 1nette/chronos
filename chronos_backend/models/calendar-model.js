const {Schema, model} = require('mongoose')

const CalendarSchema = new Schema({
    title: {type: String, required: true},
    owner:{type: Schema.Types.ObjectId, ref: 'User', required: true},
    members: {type: Schema.Types.ObjectId, ref: 'User', required: false},
    inviteLink: {type: String, required: false, default: ""},
    event:{type: Schema.Types.ObjectId, ref: 'Comment'}  
})

module.exports = model('Calendar', CalendarSchema);