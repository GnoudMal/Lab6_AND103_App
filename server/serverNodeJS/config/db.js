const mongoose = require('mongoose');
// code 4/4/2024
const local = 'mongodb+srv://duonghgvt:duonghg04@cluster0.5s1crlw.mongodb.net/MD18402';

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
