// complete and fix the dbhelpers
const db = require('./index.js')

const helpers = {
  getProductsHelper: (callback) => {
    let queryStr = `SELECT * FROM products;`;
    db.query(queryStr, (err, results) => {
      callback(err, results)
    })
  },
  postProductsHelper: (product, callback) => {
    let { item, min_cost, curr_bid, ends_in, image } = product;
    let queryStr = `INSERT INTO products (item, min_cost, curr_bid, ends_in, image) VALUES ('${item}', ${min_cost}, ${curr_bid}, ${ends_in}, '${image}');`;
    db.query(queryStr, (err, results) => {
      callback(err, results);
    })
  },
  updateProductHelper: (callback) => {

  },
  deleteProductHelper: (callback) => {

  }
}

module.exports = helpers;
