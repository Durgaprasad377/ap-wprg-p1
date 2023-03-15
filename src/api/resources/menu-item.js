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
  res.status(400).json("TODO")
};
