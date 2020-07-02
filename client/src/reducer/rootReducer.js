var initState={
products:[],
orders:[]
  }

const rootReducer =(state=initState,action)=>{
 console.log(action.payload);
//  console.log(state);
// //var currentColor = localStorage.getItem('token');
//console.log(currentColor);


    switch(action.type){
case "get": return {...state,products:action.payload}
case "orders": return {...state,orders:action.payload}
         case "add": return{...state,message:action.payload.message,cart:localStorage.getItem('cart')};

         case "remove": return {...state,message:action.payload.message,cart: localStorage.getItem('cart')};
       default:
    return state;
    }
    
    }
    export default rootReducer;