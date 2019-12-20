const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router
  .get('/', (req, res) => {
    const filterMessage = req.query.user || null
    controller.getMessages(filterMessage)
      .then((messageList) => {
        response.success(req, res, messageList, 200)
      })
      .catch(e => {
        response.error(req, res, 'Unexpeced Error', 500, e)
      })
  })
  .post('/', (req, res) => {
    // console.log(req.body)
    controller.addMessage(req.body.user, req.body.message)
      .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
      })
      .catch(e => {
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
      })
  })
  .patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
      .then((data) => {
        response.success(req, res, data, 200)
      })
      .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
      })
    res.send('Ok')
  })
  .delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
      .then(() => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
      })
      .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
      })
  })

module.exports = router
