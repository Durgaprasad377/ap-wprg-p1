const router = require('express').Router();
const resource = require('../resources/menu-item');

router.get('/', resource.getAll);
router.post('/', resource.save);

module.exports = router;
