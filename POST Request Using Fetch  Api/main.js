document.getElementById('addPost').addEventListener('submit', addPost);

function addPost(e){

    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;


    // when POSTing to an API, the fetch api takes a second parameter of an object
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json' 
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
