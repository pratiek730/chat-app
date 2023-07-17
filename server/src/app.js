const express = require('express')
const app = express()
const cors = require('cors');
const messages = require('./routes/messages.route');
const path = require('path');

app.use(express.json())
app.use(cors());

app.use('/messages', messages)

app.use(express.static(path.join(__dirname,'..','public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})
module.exports = app;