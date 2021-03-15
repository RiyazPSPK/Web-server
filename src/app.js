const path=require('path')
const express=require('express')
const geo=require('./utils/geo')
//const forecast=require('./utils/forecast')
const hbs=require('hbs')
const forecast = require('./utils/forecast')
const app=express()
app.set('view engine','hbs')
const publicdir=path.join(__dirname,'../public')
const view=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')
app.set('views',view)
app.use(express.static(publicdir))
hbs.registerPartials(partialspath)
app.get('',(req,res)=>{res.render('first')})
app.get('/index',(req,res)=>{
  res.render('index',{title:'riyaz ahammad',no:'140950'})
})
app.set('view engine','hbs')
app.get('/about',(req,res)=>{
  res.render('about')
})
app.get('/home',(req,res)=>{res.render('home')})

app.get('/about',(req,res)=>{res.send('About our application')})
app.get('/weather',(req,res)=>{
  if(!req.query.address){ return res.send({error:'you must enter an address to fetch weather'})}
  geo(req.query.address,(error,data)=>{
    if(error){
      return res.send({error:'unable to fetch data enter valid one'})
    }
    else{
    res.send(data)}
   // forecast(data.lat,data.lon,(error,fordata)=>{
     // res.send({

      //  data,latitude:data.lat,longitude:data.lon,address:req.query.address
     // })
   // })
   
  })
})
app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({error:'You have to enter search query'})
  }
  console.log(req.query.search)
  res.send({products:[]})
})
app.get('*',(req,res)=>{res.render('404',{errormessage:'hehe go back to other link'})})

app.listen(3000,()=>{console.log('port 3000 on')})
