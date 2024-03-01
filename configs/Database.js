//เรียกใช้งานโมดูล Mongoose
const mongoose = require('mongoose');

//สร้างฟังก์ชั่น 
const connect = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/Servers");
        await mongoose.connect("mongodb+srv://Admin:1234@webhealth.kub1bgk.mongodb.net/?retryWrites=true&w=majority&appName=WebHealth/WebHealth");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(`Error connecting to MongoDB ${error}`);
    }
};

connect();