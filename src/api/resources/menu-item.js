const gateway = require('../gateways/menu-item');
const MenuItem = require("../models/menu-item")

exports.getAll = (req, res, next) => {
  MenuItem.find()
    .then(menuItems => {
      res.status(200).json(menuItems);
    })
    .catch(() => {
      res.status(500).send(new Error('Kaboom!'));
    });
};

exports.save = (req, res, next) => {
  console.log(req.body)
  const menuItemRequested =req.body
  const menuItem = new MenuItem({
    "name": menuItemRequested.name,
    "description": menuItemRequested.description,
    "price": menuItemRequested.price,
  })
  menuItem.save().then(() =>
    res.status(201).json({ message: "Menu item save successfully" })
  )
};
