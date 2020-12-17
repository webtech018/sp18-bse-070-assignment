var mongoose=require("mongoose");
var productSchema =mongoose.Schema({
    name:String,
    contact:String,
    city:String,
    service:String,
});
const Product=mongoose.model("Product",productSchema);
module.exports=Product;