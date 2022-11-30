import { makeAutoObservable } from 'mobx'
import AuthService from '../service/auth_service';
import CalService from '../service/calendar_service';
import EventService from '../service/event_service';
import axios from 'axios';
import { API_URL } from '../http';
// import { useNavigate } from 'react-router-dom';


export default class Store {
    user = {}
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    setLoading(bool) {
        this.isLoading = bool
    }
    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            //console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {

        } finally {
            this.setLoading(false)
        }
    }
    async newCalendar(title, color) {
        try {
            return await CalService.newCalendar(title, color)

        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async getCalendars() {
        try {
            const response = await CalService.getAll()
            return response.data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async removeCalendar(id) {
        try {
            await CalService.remCalendar(id)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async newEvent(title, type, content, data_start, data_end, calendar) {
        try {
            return await EventService.newEvent(title, type, content, data_start, data_end, calendar)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}