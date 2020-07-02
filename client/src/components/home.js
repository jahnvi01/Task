import React, { useState ,useEffect} from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import { Table } from 'reactstrap';
import moment from 'moment'
import profile1 from '../images/img_avatar1.png'
import { Select } from 'antd';
import { Empty} from 'antd';
const { Option } = Select;

const Home = (props) => {
 
  const [visible, setVisible] = useState(false);
  const [orders, setOrders] = useState([]);
  const [visibleDel, setVisibleDel] = useState(false);
  const [visibleUpd, setVisibleUpd] = useState(false);
  const [item, setItem] = useState("");
  const [total, setTotal] = useState(0);
  const [scoop, setScoop] = useState(1);
  const [id, setId] = useState("");
   const showModal = () => {
    setVisible(true)
    };
    const showModalDel = (_id) => {
      setId(_id)
      setVisibleDel(true)
      };
      const showModalUpd = (product) => {
        console.log(product)
        setItem(product)
      
        setVisibleUpd(true)
        };
    useEffect(() => {
    var name=localStorage.getItem("username");
 
  //  setOrders(props.orders)
   if(name===null){
 
    setVisible(true)

   }
    else{
      props.getOrders(name);
      setVisible(false)
    } 
    },[]);

    const handleChange=(value) =>{
      console.log(`selected ${value}`);
      setScoop(value)
      console.log(item)
    var amount=parseFloat(value)*parseFloat(item.order.pricePerScoop)
    console.log(amount)
      setTotal(amount)
    }
const show=()=>{
  if(props.orders.length!==0){
    var orders=props.orders.map(order=>{
  return(    <tr key={order._id}>
      <th scope="row">#</th>
  <td>{order.order.name}</td>
  <td>{order.order.pricePerScoop}</td>
  <td>{order.scoop}</td>
  <td>{order.total}</td>
  <td>{moment(order.updatedAt).fromNow()}</td>
 {update(order)}
 {remove(order)}
  </tr>
  )
    })

    return orders
  }
}
const update=(order)=>{
  console.log(item)

  return(
  <td key={order._id}><button className="btn btn-primary" onClick={()=>{showModalUpd(order)}}> Yes</button>

  <Modal
          title="Details"
          visible={visibleUpd}
          onOk={handleOkUpd}
          onCancel={handleCancelUpd}
        >
        
           <p className="mt-2">Select number of scoops</p>
          <Select   id="scoop" onChange={(event)=>{handleChange(event)}} style={{width:"100px"}}>
     {dropdown(5)}

     </Select>

     <p className="mt-2">Total Bill</p>
       <p>{total}</p>

    </Modal>
  

  </td>
  )

}



const remove=(order)=>{


  return(
  <td key={order._id}><button className="btn btn-primary" onClick={()=>{showModalDel(order._id)}}> Yes</button>

  <Modal
          title="Delete Order"
          visible={visibleDel}
          onOk={handleOkDel}
          onCancel={handleCancelDel}
        >
        
           <p className="mt-2">Do you want to delete this order?</p>
    </Modal>
  

  </td>
  )

}







const handleOkDel=e=>{


  var data={
    _id:id
    }
    fetch('/api/remove',{
      method: "post",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>
    {
    if(res.message==="Order Deleted"){
      notification.success({
        message:"Order Deleted",
       duration: 3,
      });
      window.location.reload()
    }
    else{
      notification.error({
        message:"Try again",
       duration: 3,
      });
    }
    })
         
setId("")


  setVisibleUpd(false)


}
const handleOkUpd=e=>{

  var data={

    scoop:scoop,
    total:total,
    _id:item._id
    }
    fetch('/api/updateOrder',{
      method: "post",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>
    {
    if(res.message==="update successful"){
      notification.success({
        message:"update successful",
       duration: 3,
      });
      window.location.reload()
    }
    else{
      notification.error({
        message:"Try again",
       duration: 3,
      });
    }
    })
         
setItem("")
setScoop(0)
setTotal(0)

  setVisibleUpd(false)
}
const dropdown=(no)=>{
  var no=parseInt(no);
  let items = []; 
for(var i=1;i<=no;i++){

    items.push(<Option value={i}>{i}</Option> )
  }
return items;
}
    const handleOk = e => {
    
  
      var name1=document.getElementById("username").value;
      var contact=document.getElementById("contact").value;
      console.log(document.getElementById("username").value);
      if(name1 && contact){


        localStorage.setItem("username",name1)
        localStorage.setItem("contact",contact)
        setVisible(false)
        window.location.reload()
      }
      else{
         
        
            notification.error({
              message:"Fill all the fields",
             duration: 3,
            });
        
      
      }
      
    };
    const profile=()=>{
      var name=localStorage.getItem("username");
      if(name!==null){
       return(

<div className="row">

  <div className="col-lg-3 col-md-12"  style={{padding:"0px",margin:"0px"}}>
  
  <div class="card">
        <img class="card-img-top" src={profile1} alt="Card image" width="50" height="200" />
        <div class="card-body">
       <h4 class="card-title">{localStorage.getItem('username')}</h4>
       <p class="card-text">Contact Number :-{localStorage.getItem('contact')}</p>
       <Button type="primary" onClick={showModal}>
        Change Account
        </Button>
        </div>

      </div>
  </div>
  {props.orders.length!==0 && (
  <div className="col-lg-9 col-md-12" style={{padding:"0px",margin:"0px"}}>

<h4 style={{fontSize:"25px",textAlign:"center"}} className="title mt-3 mb-3">View Your Orders </h4>
<Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Ice-Cream</th>
          <th>pricePerScoop</th>
          <th>Scoops</th>
          <th>Total</th>
          <th>Date</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
    
    {show()}
      </tbody>
    </Table>
</div>
)
}

{
  props.orders.length==0 &&(
    <div className="col-lg-9 col-md-12" style={{padding:"0px",margin:"0px"}}>

<Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 200
    }}
    description={
      <span>
       No Orders Yet
      </span>
    }
  >
    <Link to='/order'> <Button type="primary">Order Now</Button></Link>
  </Empty>
    </div>
  )
}
</div>

       )
      }
      
    }
    const handleCancelDel = e => {
      setId("")


  setVisibleUpd(false)
    }
    const handleCancelUpd = e => {
      setItem("")
setScoop(0)
setTotal(0)
setVisibleUpd(false)
    }
    const handleCancel = e => {
      console.log(e);
      var name=localStorage.getItem("username");
      if(name===null){
       setVisible(true)
     
      }
     else{
      console.log("cancelll")
      setVisible(false)
     }   
     
    };
  
   
  const setHome=()=>{
 
      return(
        <div>
    
        {profile()}
        <Modal
          title="Details"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Enter your name..</p>
          <input  type="text" id="username" style={{padding:"1%"}} placeholder="Username"  />
          <p className="mt-2">Enter your contact..</p>
          <input  type="number" id="contact" style={{padding:"1%"}} placeholder="Mobile Number"  />
        </Modal>
      </div>

      )
    }

  
  

    return (
        <div className="homepage">
       {setHome()}
   

      </div>
    );
  
}

function mapStateToProps(state){

  return {
      orders:state.orders
              }


    
  }
    function mapDispatchToStates(dispatch){
      return{
     
          getOrders:(username)=>{
  
           
              return fetch('/api/orders',{
                method: "post",
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },body:JSON.stringify({username})
              })
              .then(res=>res.json())
              .then(res=>  dispatch({type:"orders",payload:res})) 
       
           
         
      },     
      
          remove:(id)=>{
  
              dispatch({type:"remove",payload:{id:id,message:"Removed From Cart"}})
                      }
      }
    }
  export default withRouter(connect(mapStateToProps,mapDispatchToStates)(Home));







 