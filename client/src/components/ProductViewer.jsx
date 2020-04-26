import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newPrice: ''
    }
    this.changePrice = this.changePrice.bind(this)
    this.submitPrice = this.submitPrice.bind(this)
  }

  changePrice(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitPrice(e) {
    e.preventDefault()
    this.props.updatePrice(this.props.product.id, this.state.newPrice)
  }

  render(){
    return(
      <div className='product-viewer'>
        <img src={this.props.product.image} />
        <h2>{this.props.product.item}</h2>
        <h4>Current Bid: {this.props.product.curr_bid}</h4>
        <h4>Bid Ends in {this.props.product.ends_in} day(s)</h4>
        <div>
          <form onSubmit={(e) => this.submitPrice(e)}>
            <span>New Bid: </span>
            <input name="newPrice" value={this.state.newPrice} onChange={this.changePrice}></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
