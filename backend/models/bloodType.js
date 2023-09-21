const mongoose=require('mongoose');

const BloodSchema=mongoose.Schema({
    
    bloodtype:[{
        type:string,
        required:[true,'blood type is required']
    }],
    hospitalId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    isdeleted:{
        type:Boolean,
        default:false,
    }

},
{
timestamps:true
}

);
const BloodType=mongoose.model('BloodType',BloodSchema);
module.exports=BloodType;