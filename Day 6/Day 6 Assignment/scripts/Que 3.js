const title = document.getElementById('title');

const attr = document.getElementById('attribute');



const name = prompt("Enter your name", "Anonymous");

title.innerText += `Welcome ${name}`;



dark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}


const ctime = document.getElementById('time');


function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock, 1000);
