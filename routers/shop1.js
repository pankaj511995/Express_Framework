const path=require('path')
const exp=require('express')
const shoup=exp.Router()
shoup.use('/shop',((req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','shop.html'))
}))
module.exports=shoup