const mongoose =  require("mongoose")
const dotenv = require('dotenv')


exports.connectDB = async () => {
     try {
       const conn = await mongoose.connect(process.env.MONGODB_URI,)

       if (process.env.NODE_ENV === 'development'){
         console.log(`MongoDB Connected in development enviroment`)
       } else {
         console.log(`MongoDB Connected in production  enviroment`)
       }
      
     } catch (error) {
        console.log(error)

     }
}
