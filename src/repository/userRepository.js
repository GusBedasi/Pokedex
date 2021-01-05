const User = require('../models/User')

function UserRespository() {
  this.createUser = async (request, response) => {
    const user = await User.create(request.body)

    const { _id } = user

    return response.status(201).send({ 
      created: true,
      _id
    })
  }

}

module.exports = UserRespository