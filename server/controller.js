// Controller here
// complete building out the controller
const helpers = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper((err, results) => {
      if (err) { res.status(404).send(err) }
      res.status(200).json(results);
    })
  },
  post: (req, res) => {
    let product = req.body
    helpers.postProductsHelper(product, (err, results) => {
      if (err) { res.status(404).send(err) }
      res.status(200).send(results);
    })
  },
  put: (req, res) => {
    let { id } = req.params;
    let product = req.body;
    helpers.updateProductHelper(product, id, (err, results) => {
      if (err) { res.status(404).send(err) }
      res.status(200).send(results);
    })
  },
  delete: (req, res) => {

  }
}

module.exports = controller