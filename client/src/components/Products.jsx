import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry'>
      <img src={props.product.image}/>
      <h2>{props.product.item}</h2>
      <p>Current Bid: {props.product.curr_bid}</p>
      <p>Bid Ends in {props.product.ends_in} days</p>
    </div>
  )
}

export default Products