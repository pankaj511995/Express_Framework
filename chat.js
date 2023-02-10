//source--https://expressjs.com/en/guide/routing.html
//task--group chat
const exp=require('express')
const parser=require('body-parser')
const chat =exp();
const login_chat=require('./group/login')
chat.use(parser.urlencoded())
chat.use(login_chat)
chat.listen(3000)            