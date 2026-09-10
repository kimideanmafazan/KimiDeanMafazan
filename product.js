document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function(){
        const productId = document.querySelector('#productId').value;
        //fetch() allows JavaScript to send a request to another server.
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => response.json()) //when we receive a response, we convert it to a JSON object.
        .then(data => {    // Use the data returned by the API
            
            // Get product information
            const title = data.title;
            const category = data.category;

            // Display product information
            document.querySelector('#result').innerHTML =
            `Title: ${title}<br>Category: ${category}`;
        })
        // Prevent default submission
        return false;
    }

});