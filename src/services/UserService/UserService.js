const User = require('../../models/User')

class UserService {
  async createUser(name, email, password)   {
    const response = await User.create({
      name,
      email,
      password
    })

    return response
  }
}