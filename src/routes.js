const { Router } = require('express')

const UserFactor = require('./factories/userFactory')
const userService = UserFactor.generateInstance()

const routes = Router()

routes.post('/create/user', userService.createUser)

module.exports = routes