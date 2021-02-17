const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const like = require('../middleware/like')
const saucesCtrl = require('../controllers/sauce');


router.get('/',auth, saucesCtrl.getAllSauces);
router.get('/:id',auth, saucesCtrl.getOneSauce);
router.post('/',auth, multer, saucesCtrl.createSauce);
router.post('/:id',auth, multer, saucesCtrl.modifySauce);
router.delete('/:id',auth, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, like, saucesCtrl.likeSauce);

module.exports = router;