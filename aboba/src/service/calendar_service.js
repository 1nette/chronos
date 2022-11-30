import $api from '../http/index'

export default class CalendarService {
    static async getAll() {
        return $api.get('/getCalendar')
    }
    static async newCalendar(title,color) {
        return $api.post('/newCalendar',{title,color})
    }
    static async remCalendar(id) {
        return $api.delete('/removeCalendar', { id })
    }
}