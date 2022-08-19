const  guardarProducto = async () => {

    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let thumbnail = document.getElementById("thumbnail");
    
    let producto = {
        "title": title.value,
        "price": price.value,
        "thumbnail": thumbnail.value
    };

    fetch('/api/productos', {
        method: 'POST', 
        body: JSON.stringify(producto),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((response) => {
            console.log('Success:', response);
            title.value = '';
            price.value = '';
            thumbnail.value = '';
         });
}