const mongoose = require('mongoose');
const dbURI = process.env.MONGO_URI
const connectDb = async()=>{
  try {
    await mongoose.connect(dbURI);
  } 
  catch (error) {
    console.log('Error connecting to MongoDB', error);
    process.exit(0);
  }}

module.exports = connectDb;