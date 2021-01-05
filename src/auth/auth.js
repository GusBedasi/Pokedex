require('dotenv').config({ path: '../../config/.env' })
const jwt = require('jsonwebtoken')


const authorizer = (request, response, next) => {
    const authHeader = request.headers.authorization

    if(!authHeader) {
        return response.status(401).send({ Unauhtorized: 'No token provided' })
    }

    const [, token] = authHeader.split(' ')

    try {
        const payload = jwt.verify(token, process.env.RSA_PRIVATE)

        request.userId = payload.userId

        return next()

    } catch (error) {
        return response.status(401).send({ Invalid: 'Token provided is invalid' })
    }
}



module.exports = authorizer