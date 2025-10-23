const request=require('request')
 const forecaste=(long,lat,callback)=>{
const forecasteURL='https://api.weatherstack.com/current?access_key=ab24fd73c5f1a369c7bb0413c2b6f845&query='+long+','+lat+'&units=f'
request({url:forecasteURL,json:true},(error,response)=>{
  if(error){
    callback('Unable to connect to weather forecast services!',undefined)
  }else if(response.body.error){
     callback('Unable to get weather forecaste.Try another service',undefined)
  }else{
    callback(undefined,{
      Temperature:response.body.current.temperature,
      Feelslike:response.body.current.feelslike
    })
  }
})

 }

module.exports=forecaste