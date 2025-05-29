const express=require('express');
const router=express.Router();
const itemController=require('../controllers/itemcontroller');



router.post('/',itemController.createitem);
router.get('/getall',itemController.getallitems);
router.put('/update/:id',itemController.updateitem);
router.get('/findbyid/:id',itemController.findbyiditems);
router.delete('/delete/:id',itemController.deletebyit);

module.exports=router;