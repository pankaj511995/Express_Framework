const exp=require('express')
let adminr=exp.Router()

adminr.get('/home',((req,res,next)=>{
    res.send(`<form action="/added" method="POST">Product Name:<input type="text" name="title"></input>
    Price: <input type="number" name="price">
    <button type="submit">Add product</button></input></form>`)
    }))
 adminr.post('/added',((req,res,next)=>{
       console.log(req.body) 
       res.redirect('/home')
    }))
module.exports=adminr;