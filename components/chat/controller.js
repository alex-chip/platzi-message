const store = require('./store')

function addChat (users) {
  return new Promise((resolve, reject) => {
    if (!users) {
      console.log('[messageController] Los datos son invalidos')
      reject('Los datos son invalidos')
      return false
    }
    const newChat = {
      users,
      date: new Date()
    }
    store.add(newChat)
    resolve(newChat)
  })
}

function getChat (filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat))
  })
}

module.exports = {
  addChat,
  getChat
}
