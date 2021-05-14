const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const mainRouter = require('./router/router')
require('dotenv').config()


app.listen(3002)
app.use(express.json());
app.use(cors())


mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => {
        console.log('Connection was successful')
    })
    .catch(e => {
        console.log(e)
        console.log('Error while connecting to db')
    })



app.use(['/'], mainRouter)