class UserController {
  constructor({ UserService }) {
    this.userService = UserService
  }

  async createUser(request, response) {
    const {
      name,
      email,
      password
    } = request.body    

    return await this.userService.createUser(name, email, password)
  }
}