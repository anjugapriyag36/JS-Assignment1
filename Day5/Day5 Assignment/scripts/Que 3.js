fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(data))
let obj = {
    userId: 1,
    title: "delectus aut autem",

}
fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            userId: 254,
            title: "delectus aut autem"
        })


    }).then(response => response.json())
    .then(data => console.log(data))

async function fetchrandom() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/199');
    const data = await response.json;
    console.log(data);
}
fetchrandom();
