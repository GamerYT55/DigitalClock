var am_pm = document.getElementById("temp")


const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let seg = dateToday.getSeconds();
   
  if(hr < 10) {
    hr = '0' + hr
  }
  
  if(min < 10) {
    min = '0' + min
  }
  if(seg < 10) {
    seg = '0' + seg
  }
  
  if (hr < 12) {
    am_pm.innerText = 'AM'
  }else {
    am_pm.innerText = 'PM'
  }
  

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;
});



