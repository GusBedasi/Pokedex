const { Router } = require('express')

const UserFactor = require('./factories/userFactory')
const userService = UserFactor.generateInstance()

//const UserService = require('./services/UserServices')
//const userService = new UserService()

const routes = Router()

routes.post('/create/user', userService.createUser)

module.exports = routes