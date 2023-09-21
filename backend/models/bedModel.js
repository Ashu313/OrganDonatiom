const mongoose=require('mongoose');

const BedSchema=mongoose.Schema({
    typeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BedTypes"
      },
      vacancy:{
        type:String,
        default:"zero"
      },
      hospitalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
)
const BedModel=mongoose.model('BedModel',BedSchema);
export default BedModel;