const express = require('express');
const router = express.Router();
const Item = require("../controllers/itemcontroller");

router.post('/create', Item.createitem);
router.get('/getall', Item.getall);
router.get('/findbyid/:id', Item.findbyid);
router.put('/update/:id', Item.updateitem);
router.delete('/delete/:id', Item.delete);

module.exports = router;