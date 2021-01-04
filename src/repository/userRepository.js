const User = require('../models/User')

function UserRespository() {
  this.createUser = async (request, response) => {
    await User.create(request.body)

    return response.status(201).send({ 
      created: true
    })
  }

}

module.exports = UserRespository