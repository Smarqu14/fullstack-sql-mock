import React from 'react';

class Products extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         currProduct: ''
      }
      this.changeProduct = this.changeProduct.bind(this)
   }

   changeProduct() {
      this.setState({
         currProduct: this.props.product
      })
   }


   render() {
      console.log(this.state.currProduct)
      return(
       <div className='product-list-entry' onClick={() => {this.changeProduct(); this.props.updatePage(this.props.product);}}>
          <img src={this.props.product.image} />
          <div>
          <h2>{this.props.product.item}</h2>
          <h4>Current Bid: {this.props.product.curr_bid}</h4>
          <h4>Bid Ends in {this.props.product.ends_in} day(s)</h4>
          </div>
       </div>
     )
   }
}

export default Products
