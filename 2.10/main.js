function getNumber() {
  fetch("https://api.rand.fun/number/integer?min=0&max=100")
    .then(response => response.html())
    .then(data => document.querySelector('.js-result').innerHTML = data.result
    )
    .catch(error => console.log(`Ha sucedido un error: ${error}`));
}
document.querySelector('.js-number').addEventListener("click", getNumber);



//pedir string
function getPassword() {
  fetch("https://api.rand.fun/text/password?length=3")
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result2').innerHTML = data.result
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));
}
document.querySelector('.js-password').addEventListener("click", getPassword);
