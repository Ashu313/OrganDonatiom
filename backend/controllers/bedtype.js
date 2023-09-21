//mtlb total bed dekho kitna hai jaise ki icu bed,redu bed ,patient bed...

const { default: BedModel } = require("../models/bedModel")
const expressAsyncHandler=require('express-async-handler');

const getBedtypes=expressAsyncHandler(async(req,res)=>{
    try{
        const allBed=await BedModel.find({});
        if(allBed)
        {
            res.status.json({
                status:"true",
                data:allBed
            })
        }
        else{
            res.status.json({
                status:false,
                data:"no bed available of any types"
            })
        }
    }
    catch(err)
    {
        console.log(err)
    }
});
module.exports=getBedtypes;