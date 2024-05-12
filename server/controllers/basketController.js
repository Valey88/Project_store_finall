const { Basket, Device } = require("../models/models");
const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");

class BasketController {
  
  async getAll(req, res) {
    const token = req.headers.authorization
    const self = token.replace('Bearer','');
    const self2 = self.trim();
    const decoded = jwt.verify(self2, process.env.JWT_SECRET)
    const id = decoded.id
    const items = await Basket.findAll({ where: { user_id: id }});

    if(items) {
      let q = []
      for (let index = 0; index < items.length; index++) {
        const product = await Device.findOne({ where: { id: items[index].product_id } });
        const element = items[index];
        q.push({
          basket: element,
          product: product
        })
        
      }
      return res.json(q);
    }
  }
  async getAdd(req, res) {
    const product_id = req.body
    const quantity = req.body

    const token = req.headers.authorization
    const self = token.replace('Bearer','');
    const self2 = self.trim();
    const decoded = jwt.verify(self2, process.env.JWT_SECRET)

    const user_id = decoded.id

    const add = await Basket.create({ user_id: user_id, product_id: product_id, quantity: quantity });
    return res.json(add);
  }
}

module.exports = new BasketController();
