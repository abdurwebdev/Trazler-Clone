const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () =>{
  console.log("🔎 MONGO_URI:", process.env.MONGO_URI ? "Loaded" : "Missing");
   mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("MongoDb Connected.");
})
.catch(()=>{
  console.log("Connection Failed.")
})
}
module.exports = connectDB;