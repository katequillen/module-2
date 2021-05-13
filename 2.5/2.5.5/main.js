const body = document.querySelector(".body");

function backgroundClick() {

  if (event.keyCode === 82) {
      body.classList.add('red')
  } else if (event.keyCode === 77) {
        body.classList.add('blue')}
  }

  document.addEventListener('keydown', backgroundClick);
  
