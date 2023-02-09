const exp=require('express')
let rou=exp()
const bodyparser=require('body-parser')
rou.use(bodyparser.urlencoded({extended :true}))
rou.use('/home',((req,res,next)=>{
res.send(`<form action="/added" method="POST">Product Name:<input type="text" name="title"></input>
Price: <input type="number" name="price">
<button type="submit">Add product</button></input></form>`)
}))
rou.use('/added',((req,res,next)=>{
   console.log(req.body) 
   res.redirect('/home')
}))
rou.listen(3000)