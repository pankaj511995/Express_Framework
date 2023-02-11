const path=require('path')
const exp=require('express')
let adminr=exp.Router()

adminr.get('/admin',((req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    })) 
 adminr.post('/add-product',((req,res,next)=>{
    console.log(req.body.title)  
       res.redirect('/admin')
       
    }))  
module.exports=adminr;