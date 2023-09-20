
const mongoose=require('mongoose');

const BedtypeSchema=mongoose.Schema({

    types:{
        type:String,
    },
    description:
    {
        type:String,
        required:[true,"description is required"],

    },
    BedAllotedDate:{
        type:Date,
        required:[true,'date is required']
    },
    isDeleted:{
        type:Boolean,
         default:false,
    },
},
{
    timestamps:true,
}
)

const BedTypes=mongoose.model('BedTypes',BedtypeSchema);
module.exports=BedTypes;