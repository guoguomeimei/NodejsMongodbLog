const express =require("express")
const app =express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const schema={
    name:String,
    age:Number,
    health:String,
    score:Number
}
const mydata = mongoose.model('cat1s', schema);
const kitty =new mydata({name:'testzlidjian2'});
kitty.save()


app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)

    console.log(req.query)
})
app.listen(30506)


