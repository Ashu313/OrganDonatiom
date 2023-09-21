const express=require('express');
const { saveHospitalDetails, updateHospitalDetails } = require('../controllers/hospitaldetails');

const hospitalRoute=express.Router();
hospitalRoute.post('/',saveHospitalDetails);
hospitalRoute.put('/updateHospitalDetail',updateHospitalDetails);

module.exports=hospitalRoute;