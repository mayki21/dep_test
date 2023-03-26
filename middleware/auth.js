const jwt=require("jsonwebtoken")

const authorise=(req,res,next)=>{

    const token=req.headers.authorization.split(" ")[1]

    if(token)
    {
        jwt.verify(token,"mayank",(err,decoded)=>{
            // console.log(decoded)
            
            if(decoded)
            {
                req.body.userID=decoded.userID
                next()
            }
            else
            {
                res.send({ "msg": "Login First" })
            }
        })
    }
    else
    {
        res.status(404).send({"msg":"login first bro"})
    }

}
module.exports=authorise