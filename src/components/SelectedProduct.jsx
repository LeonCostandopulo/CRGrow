/* eslint-disable react/prop-types */

import { products } from '../constants.js';

function getProduct(product) {
  return products.find((p) => p.id === product);
}

function getProductsOnCart() {
  return Array.from(document.querySelectorAll(".clicked-selected-product"));
}

export function SelectedProducts({ product, funcion}) {
  const productSelected = getProduct(product);

  function isProductSelected() {
    const productsOnCart = getProductsOnCart();
    
    return productsOnCart.some(
      (element) => element.id === `${product}`
    );
  }

  function handleClick2() {
    const selected = document.getElementById(`${product}`);
    if (selected) {
      selected.style.scale = "1";
      selected.classList.toggle('clicked-selected-product');
    }

  }

  return (
    <>
        <div className='clicked-container' onClick={funcion}>
          <div id={product} className="clicked" >
            <img className="clicked-img" src={productSelected?.img} alt={productSelected?.name} />
            <h2 className="clicked-product">
              {productSelected?.name}
            </h2>
            <p className="clicked-price">${productSelected?.price}</p>
            <button onClick={handleClick2} className="clicked-buy-button">
              {isProductSelected() ? 'Sacar del carrito' : 'Meter al carrito'}
            </button>
            <p className="clicked-aclaration">
              Toca en cualquier lugar para volver
            </p>
          </div>
        </div>
    </>
  );
}