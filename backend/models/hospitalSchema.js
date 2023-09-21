
const mongoose=require('mongoose');

//figma se socho
const HospitalSchema=mongoose.Schema({
    
    hospitalEmail:{
        type:String,
        required:[true,"hospital email is required"]
    },
    location:{
        type:Object,
        default:""
    },
    hospitalPassword:{
        required:[true,'password is required'],
        type:String,
    },
    hospitalDetail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Details', //reference from hospital details,
    },
    otp:{
        type:String
    },
    expTime:{
        type:Date,
    },
    verified:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true
}

);

const Hospital=mongoose.model('Hospital',HospitalSchema)
module.exports=Hospital;

