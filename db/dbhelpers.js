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
  updateProductHelper: (product, id, callback) => {
    let { curr_bid } = product;
    let queryStr = `UPDATE products SET curr_bid=${curr_bid} WHERE id=${id};`;
    db.query(queryStr, (err, results) => {
      callback(err, results);
    })
  },
  deleteProductHelper: (id, callback) => {
    let queryStr = `DELETE FROM products WHERE id=${id}`
    db.query(queryStr, (err, results) => {
      callback(err, results);
    })
  },
  getOneProduct: (id, callback) => {
    let queryStr = `SELECT * FROM products WHERE id=${id}`
    db.query(queryStr, (err, results) => {
      callback(err, results)
    })
  }
}

module.exports = helpers;
