const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')

// Load dotenv varriables
dotenv.config({ path : './config.env' })
const bootcamps = require('./routes/bootcamps')

connectDB();

const app = express()
app.use(express.json())
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in the ${process.env.NODE_ENV} mode on port ${PORT}`))