/* eslint-disable react/prop-types */
import { products } from '../constants.js';
import { Link } from 'react-router-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { SelectedProducts } from './SelectedProduct.jsx';

const NameShorter = ({productName})=>{
  const name = productName.split(' ').slice(2, productName.length).join(' ')
  return (
    <>
      {name}
    </>
  )
}

export function CustomProducts( { typeRequired, children } ) {

  const [product, setProduct] = useState('')
  
  const navigate = useNavigate()
  
  const handleClick = (e) => { 
    setProduct(e.target.id)
    if (product) navigate('/') 
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
            <Link to={product.id} onClick={handleClick} key={product.id} className={`custom-product-button ${typeRequired}`} id={product.id}>
              <NameShorter productName={product.name} />
            </Link>
          )
        })
      }
      </article>
      <Routes key={`route-${product}`} className='custom-product-button' id={`route-${product}`}>
        <Route path={`/${product}`} element={<SelectedProducts key={product} product={product} funcion={handleClick} />} />
      </Routes> 
    </>
  )
}
