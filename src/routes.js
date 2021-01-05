const { Router } = require('express')

const UserFactor = require('./factories/userFactory')

const userService = UserFactor.generateUserServiceInstance()
const sessionService = UserFactor.generateSessionServiceInstance()

const authorizer = require('./auth/auth')

const routes = Router()

routes.post('/create/user', userService.createUser)
routes.post('/login', sessionService.store)

routes.use(authorizer)

routes.put('/update/user', userService.updateUser)
routes.get('/authenticated', (_, response) => response.send())

module.exports = routes