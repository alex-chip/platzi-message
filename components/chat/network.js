const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router
  .post('/', (req, res) => {
    controller.addChat(req.body.users)
      .then((users) => {
        response.success(req, res, users, 201)
      })
      .catch(e => {
        response.error(req, res, 'Internal Error', 400, e)
      })
  })
  .get('/', (req, res) => {
    const filterChat = req.query.chat || null
    console.log(filterChat)
    controller.getChat(filterChat)
      .then((chatList) => {
        response.success(req, res, chatList, 200)
      })
      .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
      })
  })

module.exports = router
