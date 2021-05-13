const display = document.querySelector('.foo');
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur dolorum minima quisquam doloribus consequuntur laboriosam voluptates, quidem deleniti similique doloremque non, et, odio nemo quo dicta placeat in sequi?'

function ipsum() {
    display.innerHTML = display.innerHTML + text;
}
display.addEventListener('mouseover', ipsum);


//okay cool but why does it keep displaying hahaha