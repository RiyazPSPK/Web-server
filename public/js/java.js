console.log('client side javascript loaded')
const weatherform= document.querySelector('form')
const search=document.querySelector('input')
const para1=document.querySelector('#para1')
const para2=document.querySelector('#para2')
const para3=document.querySelector('#para3')
const para4=document.querySelector('#para4')
const para5=document.querySelector('#para5')
const para6=document.querySelector('#para6')
const para7=document.querySelector('#para7')
const para8=document.querySelector('#para8')
weatherform.addEventListener('submit',(e)=>{
     e.preventDefault()
    const location=search.value
    para1.textContent='Loading.........'
    para2.textContent=''
    para3.textContent=''
    para4.textContent=''
    para5.textContent=''
    para6.textContent=''
    para7.textContent=''
    para8.textContent=''
    fetch('/weather?address='+location).then((response)=>{
      response.json().then((data)=>{
                if(data.error){
                    para1.textContent='Enter valid address'
                }
                else{
                  
                para1.textContent='Name: '+data.location.name
                para2.textContent='Country: '+data.location.country
                para3.textContent='State: '+data.location.region
                para4.textContent='Timezone: '+data.location.timezone_id
                para5.textContent='LocalTime: '+data.location.localtime
                para6.textContent='Latitude&longitude: '+data.location.lat+','+data.location.lon
                para7.textContent='Temperature: '+data.current.temperature
                para8.textContent='Condition: '+data.current.weather_descriptions
                console.log(data)}
                
      })

})
})
