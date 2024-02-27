import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/otpdb')

.then(()=>{
    console.log("Mongodb connected")
})
.catch(()=>{
    console.log("Not connected to Mongodb")
})