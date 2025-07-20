const mongoose = require('mongoose');
const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB using Mongoose');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); 
    }
}
module.exports = connectToMongoDB;