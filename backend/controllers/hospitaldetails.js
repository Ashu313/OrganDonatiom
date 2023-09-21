const expressAsyncHandler=require('express-async-handler');
const Hospital = require('../models/hospitalSchema');
const Details = require('../models/hospitalDetails');

const saveHospitalDetails=expressAsyncHandler(async(req,res)=>{

    const {HospitalName,HospitalAddress,hepline,placeId,HospitalId}=req.body;
     let body={};
     const hospital=await Hospital.findOne({
        _id:HospitalId,
        verified:true,
     })
     if (!hospital) {
        return res.status(406).json({
          status: false,
          message: "Invalid Hospital Id",
          data: "",
        });
      }
     try{
    
     const hospitaldetail=await Details.create({
HospitalName,
HospitalAddress,
helpline,
placeId,
HospitalId
     })
     hospital.hospitalDetail = Details._id;
     await hospital.save();

     res.json(hospitaldetail);
    }
    catch(err)
    {
        res.json(err);
    }
 

})

const updateHospitalDetails=expressAsyncHandler(async(req,res)=>{

    const {HospitalName,HospitalNumber,HospitalId,HospitalAddress,beds,availableOperations,placeId,emergencyAvailability,oxygen,blood,ambulanceAvailbility,helpline}=req.body;
    try{
        const {id}=req?.params
    const hospital=await findByIdAndUpdate(id,{
        HospitalName,
        HospitalNumber,
        HospitalId,
        HospitalAddress,
        beds,
        availableOperations,
        placeId,
        emergencyAvailability,
        oxygen,blood,
        ambulanceAvailbility,
        helpline
    },
    {
        new:true,
    }
    )
    res.json(hospital);
}catch(err)
{
    res.json(err);
}
})

module.exports={saveHospitalDetails,updateHospitalDetails};

