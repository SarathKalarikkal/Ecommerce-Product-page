document.addEventListener('DOMContentLoaded', () => {
    const productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        window.location.href = "/";
    } else {
        fetch('productsList.json')
        .then(response => response.json())
        .then(data => {
            const thisProduct = data.find(product => product.id == productId);
            if (thisProduct) {
                showDetails(thisProduct);
            } else {
                window.location.href = "/";
            }
        });
    }
});

const showDetails = (product) => {
    document.querySelector('.thisProductImageWrapper img').src = product.image
    document.querySelector('.thisProductDetails h3').innerHTML = product.Product
    document.querySelector('.thisProductDetails p span').innerHTML = product.Ratings
    document.querySelector('.thisProductDes').innerHTML = product.Description
    document.querySelector('.thisprice').innerHTML = product.Price

    const similarProducts = document.querySelector('.similar-products-wrapper');

    fetch('productsList.json')
    .then(response => response.json())
    .then(data => {
        data.slice(0, 4).forEach(similarProduct => {
            const productOne = document.createElement('a');
            productOne.classList.add('productLink-click');

            productOne.innerHTML = `<div class="product">
                <div class="productImg">
                    <img src="${similarProduct.image}" alt="">
                </div>
                <div class="product-detail">
                    <h3>${similarProduct.Product}</h3>
                    <div class="ratingsNcategory">
                        <div class="rating">
                            <span>${similarProduct.Category}</span>
                            <span>${similarProduct.Ratings}</span>
                        </div>
                        <div class="price">
                            <span>${similarProduct.Price}</span>
                        </div>
                    </div>
                </div>
            </div>`;

            productOne.href = `/detail.html?id=${similarProduct.id}`;
            similarProducts.appendChild(productOne);
        });
    });
}
