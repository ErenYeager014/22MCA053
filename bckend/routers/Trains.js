const router=require('express').Router();
const {train,trains}=require('../Controller/TrainController')
router.get('/train/trains',trains);
router.get('/train/trains/:id',train);

module.exports=router;