//CONFIGURE DB
const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/employeeMachineTestDB');
        console.log('Mongoose Connected');
    } catch (error) {
        console.log(`error : ${error.message}`);
    }

};

module.exports = connectDB;

