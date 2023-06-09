const auth=async(req,res)=>{
    return res.status(200).send("doen")
}
const register=async(req,res)=>{
    try {
        const body=req.body;
        const res=await fetch("http://104.211.219.98/train/register",JSON.stringify(body),{
            Method: "POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(res.status===200){
            return res.json(res.data)
        }
        else{
            return res.json(res.data)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports ={auth,register}