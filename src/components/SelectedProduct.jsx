/* eslint-disable react/prop-types */

import { products } from '../constants.js';

function getProduct(product) {
  return products.find((p) => p.id === product);
}

function getProductsOnCart() {
  return Array.from(document.querySelectorAll(".clicked-selected-product"));
}

export function SelectedProducts({ product, funcion }) {
  const productSelected = getProduct(product);

  function isProductSelected() {
    const productsOnCart = getProductsOnCart();
    
    return productsOnCart.some(
      (element) => element.id === `${product}`
    );
  }

  function handleClick() {
    const selected = document.getElementById(`${product}`);
    if (selected) {
      selected.classList.toggle('clicked-selected-product');
    }
  }

  return (
    <>
      {product && (
        <div className="clicked" onClick={funcion}>
          <h2 className="clicked-product">
            {productSelected?.name}
          </h2>
          <p className="clicked-price">${productSelected?.price}</p>
          <button onClick={handleClick} className="clicked-buy-button">
            {isProductSelected() ? 'Sacar del carrito' : 'Meter al carrito'}
          </button>
          <p className="clicked-aclaration">
            Toca en cualquier lugar para volver
          </p>
        </div>
      )}
    </>
  );
}
