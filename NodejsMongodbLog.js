const express =require("express")
const app =express()
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query,"errr")

    console.log(req.query)
})
app.listen(30506)