const express = require('express')

// const router = require('./components/message/network')
const db = require('./db')
const app = express()
const router = require('./network/router')

db('mongodb://alexchip:platzitelegram32@ds259089.mlab.com:59089/platzi_node_telegram')

// Middelwares
app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

// Router
// app.use(router)
router(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('Server corriendo en el puerto 3000')
