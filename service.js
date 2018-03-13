function NasaService(){
  var apiKey = '?api_key=Q4KMi7whcYXB5HRls8L7yn3eAJlwecX1FdKAdXaT&date='
  var baseUrl = 'https://api.nasa.gov/planetary/apod'


  this.getAPOD = function(date, cb){
    $.get(baseUrl+apiKey+date)
      .then(res=>{
        console.log(res)
        cb(res.hdurl)
      })
  }
  
}