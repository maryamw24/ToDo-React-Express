const router = require('express').Router();
const controller = require('../controllers/ToDoController');


router.get('/', controller.getAll)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.post('/delete', controller.delete)


module.exports = router;