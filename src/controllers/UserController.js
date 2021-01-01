class UserController {
  constructor({ userService }) {
    this.userService = userService
  }

  createUser(request, response) {
    const {
      name,
      email,
      password
    } = request.body   

    return this.userService.createUser(name, email, password)
  }
}

module.exports = UserController