const mongoose=require('mongoose');

const BedSchema=mongoose.Schema({
    typeId:{
        type:Schema.Types.ObjectId,
        ref:"BedTypes"
      },
      vacancy:{
        type:String,
        default:"zero"
      },
      hospitalId:{
        type:Schema.Types.ObjectId,
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
const BedModel=mongoose.model('BedMode',BedSchema);
export default BedModel;