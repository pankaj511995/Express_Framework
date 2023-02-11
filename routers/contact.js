const path=require('path')
const exp=require('express')
const contact=exp.Router()
contact.use('/contact',((req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'))
}))
contact.post('/success',((req,res,next)=>res.send(`<storng>${req.body.name} : ${req.body.email}</storng>`))) 
module.exports=contact