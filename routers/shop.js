const exp=require('express')
const shoup=exp.Router()
shoup.use('/shop',((req,res)=>res.send('<div>This is only for shoping</div>')))
module.exports=shoup