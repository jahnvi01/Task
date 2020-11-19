const {products}=require("../../database/products")
const {orders}=require("../../database/orders")
const _ = require('lodash');
const mongoose=require("mongoose")
var ObjectId = mongoose.Types.ObjectId;

   
exports.getProducts = (req, res) => {
 
    products.find()
             .exec((err, data) => {
            if (err) {
                return res.json({
                    error: err
                });
            }

        return res.json(data)
        });
};


   
exports.order= (req, res) => {

var {username,contact,scoop,total,id}=req.body

var order=ObjectId(id);
var newOrder=new orders({username,contact,scoop,total,order})
    newOrder.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            });

          
    }
    
                return res.json({
                    message:"ordered successfully"
                    });
            });


};        






  
exports.updateOrder= (req, res) => {

    var {scoop,total,_id}=req.body
  
orders.findById(_id)
.exec((err,order)=>{
    order = _.merge(order, {scoop,total});

    if (err) {
        return res.status(400).json({
            error: "Failed to update"
        });
    }

        order.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });

              
        }
        return res.json({
            message:"update successful",  
            });
    });

})


    };        
    
    
    exports.remove = (req, res) => {
            var _id=req.body._id;
  
   
          orders.findByIdAndRemove(_id).exec((err, data) => {
                  if (err) {
                      return res.json({
                          error: err
                      });
                  }
  
  
              })
               
                            
  
                     return  res.json({
                      message:"Order Deleted"
                    });
  
              
             
          }
      
          
  
  



exports.showOrders = (req, res) => {
 var username=req.body.username
    orders.findOne({username})
.sort({createdAt:1})
    .populate('order','_id name pricePerScoop')
             .exec((err, data) => {
            if (err) {
                return res.json({
                    error: err
                });
            }

        return res.json(data)
        });
};

