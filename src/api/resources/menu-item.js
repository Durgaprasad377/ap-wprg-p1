 const gateway = require('../gateways/menu-item');

 exports.getAll = (req, res, next) => {
   gateway.findAll()
     .then(menuItems => {
       res.status(200).json(menuItems);
     })
     .catch(() => {
       res.status(500).send(new Error('Kaboom!'));
     });
 };