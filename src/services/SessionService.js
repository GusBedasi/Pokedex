require('dotenv').config()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

function SessionService() {
    this.store = async  (request, response) => {
        const { 
            email,
            password
        } = request.body

        const user = await User.findOne({ email })
    
        if(!user) {
            return response.status(404).send({ Error: 'User not found' })
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash)
    
        if(!isPasswordCorrect) {
            return response.status(401).send({ Unauthorized: 'Email or password incorrect' })
        }
        
        return response.json({
            token: jwt.sign({ userId: user._id}, process.env.RSA_PRIVATE, {
                expiresIn: '7d'
            })
        })
    }
}

module.exports = SessionService