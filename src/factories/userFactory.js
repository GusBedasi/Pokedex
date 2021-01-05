const UserRepository = require('../repository/userRepository')
const UserService = require('../services/UserService')

const SessionService = require('../services/SessionService')

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