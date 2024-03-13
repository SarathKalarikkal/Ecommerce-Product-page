document.addEventListener('DOMContentLoaded', () => {
    fetch('productsList.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        showDetails(products);
    });
});


const showDetails = () => {

    
let detail = document.querySelector('.detail');

let productId = new URLSearchParams(window.location.search).get('id');

let thisProduct = products.find(product => product.id == productId);

if (!thisProduct) {
    window.location.href = "/";
    return;
}

document.querySelector('.thisProductImageWrapper img').src = thisProduct.image
document.querySelector('.thisProductDetails h3').innerHTML = thisProduct.Product
document.querySelector('.thisProductDetails p span').innerHTML = thisProduct.Ratings
document.querySelector('.thisProductDes').innerHTML = thisProduct.Description
document.querySelector('.thisprice').innerHTML = thisProduct.Price


const similarProducts = document.querySelector('.similar-products-wrapper')



products.slice(0,4).forEach(product => {
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

    similarProducts.appendChild(productOne);
    
    
});

}

document.querySelector('.menu-Icon').addEventListener('click', ()=>{
    const dropMenu = document.querySelector('header ul')
  
      if(dropMenu.classList.contains('active')){
          dropMenu.classList.remove('active')
      }else{
          dropMenu.classList.add('active')
      }
  })