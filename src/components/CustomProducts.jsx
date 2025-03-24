/* eslint-disable react/prop-types */
import { products } from '../constants.js';
import { SelectedProducts } from './SelectedProduct.jsx';
import { useState} from 'react';

const NameShorter = ({productName})=>{
  const name = productName.split(' ').slice(2, productName.length).join(' ')
  return (
    <>
      {name}
    </>
  )
}

export function CustomProducts( { typeRequired, children } ) {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = (e) => { 
    const productId = e.target.id;
    const selected = document.getElementById(productId);
    const productAlreadySelected = document.querySelector('.clicked-product');
    if (selected) {
      selected.classList.toggle('clicked-product');
      if (productAlreadySelected) {
        productAlreadySelected.classList.remove('clicked-product');
      }
    }
    productId === clicked 
    ? setClicked(false)
    : setClicked(productId)
  }
  
  return (
    <> 
      <h3 className='custom-product-title' >{children}</h3>
      <article className="custom-products">
      { 
        products
        .filter((product) => product.type === typeRequired)
        .map((product) => {
          return (
            <button onClick={handleClick} key={product.id} className={`custom-product-button ${typeRequired}`} id={product.id}>
              <img className='custom-img' id={product.id} src={product.img} alt="imágen del producto" />
              <NameShorter productName={product.name} />
            </button>
          )
        })
      }
      </article>
      {clicked && <SelectedProducts product={clicked} funcion={handleClick} />}
    </>
  )
}