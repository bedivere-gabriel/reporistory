
function myFunction(){
    document.getElementById("bodyID").classList.remove("disable-scroll");
    document.getElementById("coverphoto").classList.add("active");
    document.getElementById("activeslide").classList.add("active");
    document.getElementById("imgslider").classList.add("active");
  }

  var myVar;

  function loadfunction() {
    myVar = setTimeout(transfunction, 2000);
  }
  
  function transfunction() {
    document.getElementById("bg_loader").classList.add("trans");
    document.getElementById("loader").style.display = "none";
    myVar = setTimeout(showPage,800);
  }

  function showPage() {
    document.getElementById("bg_loader").style.display = "none";
  }

  var checkbox = document.querySelector('input[name=theme]');

  checkbox.addEventListener('change', function() {
      if(this.checked) {
          trans()
          document.documentElement.setAttribute('data-theme', 'light')
          document.getElementById("navigation").classList.remove("bg-dark", "navbar-dark")
          document.getElementById("navigation").classList.add("bg-light", "navbar-light")
      } else {
          trans()
          document.documentElement.setAttribute('data-theme', 'dark')
          document.getElementById("navigation").classList.remove("bg-light", "navbar-light")
          document.getElementById("navigation").classList.add("bg-dark", "navbar-dark")
      }
  })
  
  let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition')
      }, 1000)
  }

  let griditems

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    griditems = 200
  }
  else if (width <= 700){
    griditems = 500
  }
  else {
    griditems =800
  }

  for(var i =1; i<= griditems; i++){
    $('#target-grid').append($('<div/>', {'class' : 'grid_item'}))
  }