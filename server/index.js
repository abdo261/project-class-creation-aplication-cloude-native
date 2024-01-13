const express = require('express')
const app = express()
const cors = require('cors')
require('./config/connexion')
const {PORT}= require('dotenv').config().parsed
app.use(express.json())
app.use(cors())

const UserRouter = require('./routers/user')
app.use('/api/user',UserRouter)
app.listen(PORT,()=>console.log(`server raning in port ${PORT}`))