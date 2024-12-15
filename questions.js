var bodyColor = document.getElementById('bg-color')

function dark(){
  localStorage.setItem('mode', 'dark')
  check()
}

function white(){
  localStorage.setItem('mode','white')
  check()
}

function check(){
  var checkColor = localStorage.getItem('mode')

  if(checkColor === 'dark'){
    bodyColor.className = 'dark'
  }else{
    bodyColor.className = 'white'
  }
}

function setByDefault() {
    var checkMode = localStorage.getItem("mode");
    if (checkMode === null) {
      localStorage.setItem("mode" , "white");
      check();
    } else {
      check();
    }
  }
  window.onload = setByDefault();