const exp=require('express')
let app=exp()
app.use((req,res,next)=>{
    console.log('i am first entring')
    next()// allow the request to continue to next middleware in line
})
app.use((req,res,next)=>{
    console.log('hey i am second file')
    // res.send('<h1>This is my express first projecct-file</h1>')
    res.send({ key1: value })
})
app.listen(4000)