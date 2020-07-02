var mongoose =require('mongoose');
const crypto=require('crypto')
mongoose.set('debug',true);
mongoose.Promise=global.Promise;
const { ObjectId } = mongoose.Schema;

const Schema=mongoose.Schema;

const orderschema=new Schema({
   username:{
      type:String,
      required:true,
      index:true

  },
   contact:{
       type:String,
       required:true,
      
   },
scoop:{
type:String,
required:true,
},
  
total:{
    type:String,
    required:true,
    },
      


  order: { type: ObjectId, ref: 'products'}
}, { timestamps: true });

const orders=mongoose.model('orders',orderschema);



 module.exports={orders};
