const express = require('express')
const {getAllMessages, getOneMessage, postMessage, httpGetMessages, httpPostMessage} = require('./messages.controller')

const messages = express.Router()



messages.get('/', httpGetMessages)

messages.post('/', httpPostMessage)

module.exports = messages;

