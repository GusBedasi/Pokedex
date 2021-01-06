const UserRepository = require('../repository/userRepository')
const UserService = require('../services/userService')

const SessionService = require('../services/sessionService')

const generateUserServiceInstance = () => {
    const userService = new UserService(
        new UserRepository()
    )

    return userService
}

const generateSessionServiceInstance = () => {
    const sessionService = new SessionService()

    return sessionService
}

module.exports = { generateUserServiceInstance, generateSessionServiceInstance }