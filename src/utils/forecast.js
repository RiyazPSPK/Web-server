const request=require('request')
const forecast=(a,b,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=2a94793677cacb635cf840030cc4d10b&query=vinukonda'
    request({url,json:true},(error,response)=>{
        if(!error){
            callback(undefined,[response.body.location.lat,response.body.location.lon])
    }
    
    })}
    
module.exports=forecast