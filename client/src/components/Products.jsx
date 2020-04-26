import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry'>
       <img src={props.product.image} />
       <div>
       <h2>{props.product.item}</h2>
       <h4>Current Bid: {props.product.curr_bid}</h4>
       <h4>Bid Ends in {props.product.ends_in} day(s)</h4>
       </div>
    </div>
  )
}

export default Products
