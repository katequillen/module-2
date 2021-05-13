// const baz = document.querySelector('.foo');
// baz.addEventListener('click', function showAlert() {
//   baz.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
// });

// const baz = document.querySelector('.foo');
// baz.addEventListener('click', () => baz.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!');

const button = document.querySelector('.foo');
function ole() {
    button.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}
button.addEventListener('click', ole);
//this shows what I want it to, but always. not just when it has never been clicked