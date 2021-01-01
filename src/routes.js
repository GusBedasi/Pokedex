const { Router } = require('express')

const userController = require('./factory/UserFactory')

const routes = Router()

routes.post('/create/user', userController.createUser)

module.exports = routes