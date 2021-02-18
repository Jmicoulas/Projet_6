const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const like = require('../middleware/like')
const saucesCtrl = require('../controllers/sauce');
const newSauceChecker = require('../middleware/newSauceChecker')


router.get('/', auth, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.post('/', auth, multer, newSauceChecker, saucesCtrl.createSauce);
router.put('/:id', auth, multer, newSauceChecker, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, like, saucesCtrl.likeSauce);
router.put('/:id/like', auth, like, saucesCtrl.likeSauce);

module.exports = router;