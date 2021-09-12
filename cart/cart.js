let getUrl = new URL(document.URL);
let firebaseId = getUrl.searchParams.get('id');

productData()
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(function (data) {
        product = data;
        drawDetails();
    })
    .catch(err => console.log(err));

function productData() {
    return fetch(`https://proiect-final-f676e.firebaseio.com/phones/${firebaseId}.json`, {
        method: 'GET'
    });
}


function drawDetails() {
    var html = `
    <div class="card" style="width: 50rem;">
    <img src="${product.image}" class="card-img-top">
    <div class="card-body">
    <h2 class="card-title">${product.name.toUpperCase()}</h2>
    <p class="card-text"><b>Description:</b>&nbsp${product.configuration}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><p><b>Price:</b>&nbsp${product.price}</p>
    </li>
    <li class="list-group-item"><p><b>Stock:</b>&nbsp${product.stock} items</p></li>
    </ul>
    <div class="card-body">
    <a href="#" class="card-link"><button class="bag-btn" data-id=${product.id} onclick="addToCart();"><i class="fas fa-shopping-cart">&nbspAdd to cart</i></button></a>
    </div>
    </div>
    `;
    document.querySelector('#content').innerHTML = html;
}

function ajax(method, url, body) {
    return new Promise(function (resolve, reject) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(new Error("serverul a dat eroare"));
                }
            }
        };
        xhttp.open(method, url, true);
        xhttp.send(body);
    });
}

var url = "https://proiect-final-f676e.firebaseio.com/"
async function addToCart(id, quantity) {
    var arr = await Promise.all([
        await ajax("GET", url + "cart/" + id + ".json"),
        await ajax("GET", url + "phones/" + id + "/stock.json")
    ]);
    var cartQuantity = arr[0];
    var stock = arr[1];


    var cartQuantity = await ajax("GET", url + "cart/" + id + ".json");
    var stock = await ajax("GET", url + "phones/" + id + "/stock.json");

    if (cartQuantity === null) {
        cartQuantity = 0;
    }
    console.log(quantity, cartQuantity, stock);
    if (stock < quantity + cartQuantity) {
        quantity = stock;
    } else {
        quantity = quantity + cartQuantity;
    }
    await ajax("PUT", url + "cart/" + id + ".json", quantity);
}