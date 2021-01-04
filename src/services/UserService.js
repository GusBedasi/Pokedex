function UserService(userRespository) {
  this.userRepository = userRespository

  this.createUser = (request, response) => {
    return this.userRepository.createUser(request, response)
  }

}

module.exports = UserService