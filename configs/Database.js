//เรียกใช้งานโมดูล Mongoose
const mongoose = require('mongoose');

//สร้างฟังก์ชั่น 
const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Servers");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(`Error connecting to MongoDB ${error}`);
    }
};

connect();