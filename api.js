let lista = document.getElementById('categories');
fetch("https://fakestoreapi.com/products/categories")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(categoria => {
            lista.innerHTML += `<li>${categoria}</li>`;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


