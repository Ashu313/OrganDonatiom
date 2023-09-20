//require('dotenv').config()
const mongoose=require('mongoose');
const dbConnect=async()=>{
try {
    await mongoose.connect("mongodb+srv://kashutosh727:XYDNtUWoBePfQ9ry@cluster0.iwkgp8w.mongodb.net/?retryWrites=true&w=majority",{
 
    
      useNewUrlParser:true,
 
    });
    console.log('database connected');
} catch (error) {
    console.log(`${error.message}`)
}
}
module.exports=dbConnect;
//nodemon me missing script hoga to json file me "nodemon":"nodemon";


//mongodb+srv://kashutosh727:<password>@cluster0.iwkgp8w.mongodb.net/