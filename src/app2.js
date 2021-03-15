const express=require('express')
const path=require('path')

const p=path.join(__dirname,'../public')

const app=express()
app.set('view engine','hbs')
app.use(express.static(p))
app.get('',(req,res)=>{
    res.send('hihih')
})
app.get('/riyaz',(req,res)=>{res.send('hello Sir Riyaz Ahammad')})
app.listen(3180,()=>{console.log('turning on port 3180')})