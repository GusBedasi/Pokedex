const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  passwordHash: String
})

userSchema.pre('save', async function() {
  if (this.password){
    this.passwordHash = await bcrypt.hash(this.password, 8)
  }
  
  this.password = undefined
})

module.exports = new model('User', userSchema);