const mongoose = require('mongoose');

const connectDB = async () => {
    const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
    try {
        const connection = await mongoose.connect(DB)
        console.log('DB successfully connected');
    } catch (error) {
        console.log('error connecting DB');
        console.log(error);
    }
}

module.exports = connectDB