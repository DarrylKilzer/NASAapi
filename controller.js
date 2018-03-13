function NasaController(){
  var nasaService = new NasaService()


  this.getAPOD = function(e){
    e.preventDefault()
    var date = e.target.date.value
    nasaService.getAPOD(date, draw)
  }

  function draw(imageUrl){
    var picElem = document.getElementById('image')

    var template = `<img src='${imageUrl}'>`

    picElem.innerHTML = template
  }

}