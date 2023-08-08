let btn = document.querySelector('button');
let interval;
let seconde = 10;

btn.addEventListener('click', start);


function start() {
  interval = setInterval(decompte, 1000);
}


function stop(){
  clearInterval(interval)
  document.innerHTML += 'Stop !'
}

function decompte() {
  seconde--;
  if (seconde == 0) {
    stop();
  }
  else {
    document.body.innerHTML += seconde + '<br>';
  }
          
}

