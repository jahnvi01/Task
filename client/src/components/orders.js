import React, { useState ,useEffect} from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import ice from '../images/ice.jpg'
import { Select } from 'antd';
const { Option } = Select;

const Products = (props) => {
 
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [scoop, setScoop] = useState("");
  const [item, setItem] = useState("");
   const showModal = (product) => {
       console.log(product)
       setItem(product)

    setVisible(true)
    };
    useEffect(() => {
        props.getProducts()
    var name=localStorage.getItem("username");
   
   if(name===null){
     props.history.push("/")
    setVisible(true)
 
   }
    else{
    
      setVisible(false)
    } 
    },[]);
    const handleOk = e => {
      var contact=localStorage.getItem("contact");
      var username=localStorage.getItem("username");

if(username && contact && scoop && total!==0 && item)
{
var data={
username:username,
contact:contact,
scoop:scoop,
total:total,
id:item._id
}
fetch('/api/order',{
  method: "post",
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },body:JSON.stringify(data)
})
.then(res=>res.json())
.then(res=>
{
if(res.message==="ordered successfully"){
  notification.success({
    message:"ordered successfully",
   duration: 3,
  });
}
else{
  notification.error({
    message:"Try again",
   duration: 3,
  });
}
})
}   


        // localStorage.setItem("username",name)
        // localStorage.setItem("contact",contact)
        setVisible(false)
      setItem("")
      setScoop("")
      setTotal(0)
    //  else{
         
        

        
      
    //   }
      
    };
    const dropdown=(no)=>{
        var no=parseInt(no);
        let items = []; 
      for(var i=1;i<=no;i++){
    
          items.push(<Option value={i}>{i}</Option> )
        }
    return items;
    }
const handleChange=(value) =>{
    console.log(`selected ${value}`);
    setScoop(value)
  var amount=parseFloat(value)*parseFloat(item.pricePerScoop)
  console.log(amount)
    setTotal(amount)
  }
    const order=(product)=>{
  
       return(

<div className="row" style={{justifyContent:"center"}} key={product._id}>

 
       <Button type="primary" onClick={()=>{showModal(product)}}>
        Order
        </Button>
        <Modal
          title="order"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
         
          <p>Select number of scoops</p>
          <Select   id="scoop" onChange={(event)=>{handleChange(event)}} style={{width:"100px"}}>
     {dropdown(5)}

     </Select>

     <p className="mt-2">Total Bill</p>
       <p>{total}</p>

        </Modal>

        </div>

  

       )
      }

  
    const handleCancel = e => {
  
      console.log("cancelll")
      setItem("")
      setTotal(0)
      setScoop("")
      setVisible(false)
    
     
    };
  
   
  const setProducts=()=>{
 if(props.products.length!==0){
     console.log(props.products)
var products=props.products.map(product=>{
    return(
        <div className="col-lg-3 col-md-6 card card-cascade card-ecommerce" style={{margin:"10px",justifyContent:"center"}}> 




        <div className="view view-cascade overlay">
        
          <img className="card-img-top" src={ice} width="150" alt="product"  alt="" />
         
        </div>
        
        <div className="card-body card-body-cascade text-center">
        <Link to ="/details" style={{textDecoration:"none",font:"black !important"}}>
          <h4 className="card-title"><strong>{product.name}</strong></h4>
        
          </Link>
          <div className="card-footer d-flex" style={{justifyContent:"space-around"}}>
            <span className="float-left">Price :-{product.pricePerScoop}$ </span>
                     </div>
         {order(product)}
           
            </div>
          
                 
                    </div>
        
      )
})    
return products
}
    }

  
  

    return (
        <div className="container">
      <div className="row" style={{justifyContent:"center"}}>
       {setProducts()}
       </div>
      </div>
    );
  
}




function mapStateToProps(state){

    return {
        products:state.products
                }


      
    }
      function mapDispatchToStates(dispatch){
        return{
       
            getProducts:()=>{
    
             
                return fetch('/api/products',{
                  method: "get",
                   headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  }
                })
                .then(res=>res.json())
                .then(res=>  dispatch({type:"get",payload:res})) 
         
             
           
        },     
        
           
        }
      }
    export default withRouter(connect(mapStateToProps,mapDispatchToStates)(Products));











 