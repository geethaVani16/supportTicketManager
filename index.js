const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const app = express()

const port = 4000
app.use(express.json())
app.use(cors())
app.use('/', router)
app.listen(port, () => {
    console.log('listening port', port)
})
