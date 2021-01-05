const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function UserRespository() {
  this.createUser = async (request, response) => {
    const user = await User.create(request.body)

    const { _id } = user

    return response.status(201).send({ 
      created: true,
      _id
    })
  }

  this.updateUser = async (request, response) => {
    const { userId } = request.userId

    const {
      name,
      email,
      password
    } = request.body

    if(password){
      passwordHash = await bcrypt.hash(password, 8)
      await User.findOneAndUpdate(userId, { name, email, passwordHash})
      const result = await User.findOne(userId)

      return response.status(200).send(result)
    }

    await User.findOneAndUpdate(userId, { name, email })
    const result = await User.findOne(userId)

    return response.status(200).send(result)
  }

}

module.exports = UserRespository