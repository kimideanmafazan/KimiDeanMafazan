document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function(){
        const productId = document.querySelector('#productId').value;
        fetch
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => response.json()) //when we receive a response, we convert it to a JSON object.
        .then(data => {    // Use the data returned by the API
            
            // Get product information
            const {title, category, description, price} = data;
            // Display product information
            document.querySelector('#result').innerHTML =
            `Title: ${title}<br>Category: ${category}<br>Description: ${description}<br>Price: ${price}`;
        })
        // Prevent default submission
        return false;
    }

});