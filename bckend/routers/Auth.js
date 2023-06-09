const router=require('express').Router();
const {auth,register} =require("../Controller/AuthController")
router.post('/auth',auth);
router.post('/register',register)
module.exports=router;