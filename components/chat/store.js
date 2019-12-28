const Model = require('./model')

async function addChat (chat) {
  const myChat = new Model(chat)
  return myChat.save()
}

async function getChat (filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterChat !== null) {
      filter = { _id: filterChat }
    }
    Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error)
          return false
        }
        resolve(populated)
      })
  })
}

module.exports = {
  add: addChat,
  list: getChat
}
