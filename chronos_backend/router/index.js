const Router = require('express').Router;
const userController =require('../controllers/user-controller')
const {body} = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware');
const CalendarController = require('../controllers/calendar-controller');
const EventController = require('../controllers/event-controller');
const calendarService = require('../services/calendar-service');
const calendarController = require('../controllers/calendar-controller');
const router = new Router()


router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 24}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activation/:link', userController.activation)
router.get('/refresh', userController.refresh)
// router.get('/getMembers', authMiddleware,userController.getUsers)
router.post('/newCalendar', CalendarController.newCalendar)
router.get('/getCalendar', CalendarController.getCalendar)
router.delete('/removeCalendar', CalendarController.removeCalendar)
router.post('/newEvent', EventController.newEvent)
router.get('/getEvent', EventController.getEvents)
router.delete('/removeEvent', EventController.removeEvent)
router.post('/updEvent', EventController.updEvent)
router.get('/getMembers', CalendarController.getMembers)
router.post('/addNewMember', CalendarController.addNewMember)
router.get('/accept/:link', userController.acceptInvite)
router.post('/leaveCalendar', userController.leaveCalendar)
router.post('/deleteMember', calendarController.deleteMember)

module.exports = router