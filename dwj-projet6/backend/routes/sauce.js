const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauce');

router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', /*auth,*/ multer, saucesCtrl.createSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
/*router.post('/:id', auth, saucesCtrl.modifyThing);
router.delete('/:id', auth, saucesCtrl.deleteThing);*/

module.exports = router;