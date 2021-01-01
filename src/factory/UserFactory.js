const UserService = require('../services/UserService')
const UserController = require('../controllers/UserController')

const userService = new UserService()
const userController = new UserController({ userService })

module.exports = userController