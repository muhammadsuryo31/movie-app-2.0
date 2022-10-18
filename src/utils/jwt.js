const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const generateToken = async (payload) => {
    const token = await promisify(jwt.sign)(payload, process.env.SECRET, {
        expiresIn: 60 * 60
    })

    return token;
}

const verifyToken = async (access_token) => {
    const decoded = await promisify(jwt.verify)(access_token, process.env.SECRET)
    return decoded;
}

module.exports = {
    generateToken,
    verifyToken
}