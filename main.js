document.addEventListener('DOMContentLoaded', () => {
    fetch('productsList.json')
    .then(response => response.json())
    .then(data => {
        createHtml(data);
    });
});

const createHtml = (products) => {
    const container = document.querySelector('.product-container');

    products.forEach(product => {
        const productOne = document.createElement('a');
        productOne.classList.add('productLink-click');

        productOne.innerHTML = `<div class="product">
            <div class="productImg">
                <img src="${product.image}" alt="">
            </div>
            <div class="product-detail">
                <h3>${product.Product}</h3>
                <div class="ratingsNcategory">
                    <div class="rating">
                        <span>${product.Category}</span>
                        <span>${product.Ratings}</span>
                    </div>
                    <div class="price">
                        <span>${product.Price}</span>
                    </div>
                </div>
            </div>
        </div>`;

        productOne.href = `/detail.html?id=${product.id}`;
        container.appendChild(productOne);
    });
}
const menu = document.querySelector('header ul')
const menuIcon = document.querySelector('.menu-Icon')

menuIcon.addEventListener('click', ()=>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
    }else{
        menu.classList.add("active")
    }
})
