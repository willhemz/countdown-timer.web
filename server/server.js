const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const { connectDB } = require('./config/db')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

//options object for swaggerjs
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Countdown Generator Api",
      version: "1.0.0",
      description: "An api for making countDowns generators"
    },
    servers: [
      {
        //update to production url
        url: 'https://countdown-api.onrender.com'
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsDoc(options)
 

const app = express()

//setting up swagger doc
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))


dotenv.config();
app.use(express.json());
app.use(cors())

connectDB()

// Routes imports
const countDownRoutes = require('./routes/CountDownRoutes')



// Routes configurations
app.use('/', countDownRoutes)

// morgan logging configuration
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 8000

app.listen(PORT , () => {
     console.log(`Server running on port ${PORT}`)
})


