const mongoose=require('mongoose');

const vaccineSchema=mongoose.Schema({
    vaccineType:[{
        type:String,
        available:Boolean
    }],
    hospitalId:{
     type: Schema.Types.ObjectId,
      ref: "Hospital",
    },
    isdeleted:{
        type:Boolean,
        default:false
    },
},
{
    timstamps:true,
})
const vaccine=mongoose.model(vaccineSchema);
module.exports=vaccine;