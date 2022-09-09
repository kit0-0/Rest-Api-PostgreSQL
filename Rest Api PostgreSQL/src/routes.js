const { Router } = require('express')
const controller = require('./controller')
const router = Router();

router.get('/', controller.getstu)  //fetching full data
router.get('/:id', controller.getsbyid)  //fetching data from id

router.post('/', controller.poststu)  //creating new data

router.delete('/:id', controller.deletestu) //deleted

router.put('/:id', controller.putst) //updated data

module.exports = router;