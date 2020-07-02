var mongoose =require('mongoose');
mongoose.set('debug',true);
var ObjectId = mongoose.Types.ObjectId;
mongoose.Promise=global.Promise;


const Schema=mongoose.Schema;

const productschema=new Schema({name: String, pricePerScoop: Number});

const products=mongoose.model('products',productschema);



 module.exports={products};
