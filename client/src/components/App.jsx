import React from 'react';
import ProductList from './ProductList.jsx';
import ProductViewer from './ProductViewer.jsx';
import Search from './Search.jsx';
import Products from './Products.jsx';


import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      productlist: [],
      product: ''
    }
    this.getProducts = this.getProducts.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
    .get('/name/products')
    .then((data) => {
      this.setState({
        productlist: data.data,
        product: data.data[0]
      })
    })
    .catch((err) => console.error(err))
  }

  updatePrice(id, newPrice) {
    axios
    .put(`/name/products/${id}`, {
      curr_bid: newPrice
    })
    .then(() => {
      this.getProducts()
    })
    .catch((err) => console.error(err))
  }

  updatePage(currProduct) {
    this.setState({
      product: currProduct
    })
  }

  render(){
    console.log('PRODUCT STATE: ', this.state.product)
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer updatePrice={this.updatePrice} product={this.state.product} />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList productlist={this.state.productlist} updatePage={this.updatePage.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}