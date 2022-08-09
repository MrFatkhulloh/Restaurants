const jwt = require('jsonwebtoken')
const SECRET_KEY = 'UMUMAN_SECRET_KEY'

const sign = payload => jwt.sign(payload, SECRET_KEY, {
    expiresIn: '24h'
})
const verify = token => jwt.verify(token, SECRET_KEY)




module.exports = {
    sign,
    verify
}