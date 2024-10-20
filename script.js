fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=12',
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'           
        }
    }
).then(response => response.json())
    .then(data => {
    data.forEach(post => {
        const cardContainer = document.querySelector('#card-container');
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `

        <h1>${post.id}</h1>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <h1>${post.userId}</h1>

        `;
        cardContainer.appendChild(postElement);
    })
    console.log(data);
})
