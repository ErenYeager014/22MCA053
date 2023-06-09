const trains=(req,res)=>{
    res.send("trains")
}
const train=(req,res)=>{
    const id=req.params.id;
    res.send(id)
}
module.exports={trains,train}