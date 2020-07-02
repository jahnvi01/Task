const express=require("express")
const router=express.Router()
const {getProducts,order,showOrders,updateOrder,remove} =require("../action/product-function")
router.post("/order",order);
router.post("/updateOrder",updateOrder);
router.post("/remove",remove);
router.get("/products",getProducts);
router.post("/orders",showOrders);

module.exports=router;