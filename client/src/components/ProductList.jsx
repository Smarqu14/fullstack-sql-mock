import React from 'react';
import Products from './Products.jsx';

const ProductList = (props) => {
   return(
    <div className='product-list'>
       {props.productlist.map((product, index) => {
         return <Products product={product} key={index} index={index} updatePage={props.updatePage}/>
       })}
    </div>
  )
}

export default ProductList