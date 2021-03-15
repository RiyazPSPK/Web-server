const request=require('request')
const forecast=require('./forecast')
const geo=(b,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=2a94793677cacb635cf840030cc4d10b&query='+b
    request({url,json:true},(error,response)=>{
          if(!error){
           callback(undefined,response.body.location)}
           else{
               callback(error,undefined)
           }
    })
}

module.exports=geo