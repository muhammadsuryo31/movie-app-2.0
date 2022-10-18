const { generateToken } = require('../../utils/jwt');
const User = require('./../../model/userModel');
const { compare } = require('./../../utils/passwordHasher')

const registerController = async (parent, args, context, info) => {
    const input = {
        email: args.input.email,
        name: args.input.name,
        password: args.input.password
    }
    try {
        const candidateUser = new User(input);
        const newUser = await candidateUser.save();
        
        return newUser
    } catch (error) {
        console.log('error from register');
        return error
    }
}

const loginController = async (pareng, args, context, info) => {
    const loginData = {
        email: args.input.email,
        password: args.input.password
    }
    const user = await User.findOne({email: loginData.email}).select("+password");
    if(!user) {
        return {
            status: 'fail',
            message: 'Wrong email or password'
        }
    }

    const isPasswordMatched = await compare(loginData.password || 'none', user.password);
    if(!isPasswordMatched) {
        return {
            status: 'fail',
            message: 'Wrong email or password'
        }
    }

    const access_token = await generateToken({id: user.id, email: loginData.email})
    return {
        status: 'success',
        access_token
    }
}

module.exports = {
    registerController,
    loginController
}