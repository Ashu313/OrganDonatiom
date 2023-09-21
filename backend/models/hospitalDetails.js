const mongoose=require('mongoose');

const hospitalDetail=mongoose.Schema({

    HospitalName:{
        type:String,
        requrired:[true,'hospital name is required']
    },
    HospitalNumber:{
        type:String,
        default:""
    },
    HospitalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital', //refernce fromhospitalschema model
    },
    HospitalAddress:{
        type:String,
        default:"",
    },
    beds:[
        {
            types: {
            type:String,
        },
        vacancy: {
            type:Number,

        },
    },
    ],
    availableOperations:[{
        type:String,
    }],
    placeId:{
        type:String,
        default:"",
    },
    emergencyAvilability:{
        type:Boolean,
        required:false,
    },
    oxygen:{
        type:String,
        default:""
    },
    blood:[{
        type:String,
    }],
    vaccine:[{
        type:String,
    }],
    ambulanceAvailbility:{
        type:Boolean,
        default:'false',
    },
    helpline:{
        type:String,
        default:"",
    },
    isDeleted:{
        type:Boolean,
        default:"",
    }
},
{
    timestamps:true,
})

const Details=mongoose.model('Details',hospitalDetail);
module.exports=Details;