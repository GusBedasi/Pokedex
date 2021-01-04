const UserRepository = require('../repository/userRepository')
const UserService = require('../services/UserService')

const generateInstance = () => {
    const userService = new UserService(
        new UserRepository()
    )

    return userService
}

module.exports = { generateInstance }