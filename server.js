const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')

//Load env vars
dotenv.config({path:'./config/config.env'});

//Cinnect to database
connectDB();

// Body parser
const app = express()
app.use(express.json())

// Cookie parser
app.use(cookieParser());

//Mount routers
const hospitals = require(`./routes/hospitals`)
const auth = require('./routes/auth')
const appointments = require('./routes/appointments')

app.use(`/api/v1/hospitals` ,hospitals)
app.use('/api/v1/auth',auth)
app.use('/api/v1/appointments',appointments)

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log('Server running in ',process.env.NODE_ENV, ' mode on port ', PORT))

//Handle unhandle promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`)
    // Close server & exit process
    server.close((()=>process.exit(1)))
})