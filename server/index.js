const express = require('express');
const chatController = require('./controllers/chat')
const userController = require('./controllers/user')
const app = express();

app.use(express.json());

app.get('/me', userController.load);
app.get('/chats/:id', chatController.load);


app.listen(9090, ()=> {
    console.log("Listen port 9090");
})