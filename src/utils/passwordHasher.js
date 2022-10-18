const bcrypt = require('bcrypt');

const hash = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

const compare = async (inputedPassword, hashedPassword) => {
    const isSamePassword = await bcrypt.compare(inputedPassword, hashedPassword);
    return isSamePassword;
}

module.exports = {
    hash, compare
}