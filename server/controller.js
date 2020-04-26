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

  },
  delete: (req, res) => {

  }
}

module.exports = controller