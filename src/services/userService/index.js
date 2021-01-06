function UserService(userRespository) {
  this.userRepository = userRespository

  this.createUser = (request, response) => {
    return this.userRepository.createUser(request, response)
  }

  this.updateUser = (request, response) => {
    return this.userRepository.updateUser(request, response)
  }

}

module.exports = UserService