const router = require('express').Router();
const resource = require('../resources/menu-item');

 router.get('/', resource.getAll);

module.exports = router;
