

const Reducer = (state,action) => {
 switch(action.type)
 {
    case "addToCart" :
        return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
    case "removeToCart" :
        return {...state,cart:state.cart.filter(c=>c.id!==action.payload.id)}
        case "changeQty":
        return{...state,cart:state.cart.filter(c=>c.id===action.payload.id? c.qty = action.payload.qty:c.qty )}
    case "emptyCart" :
        return {...state,cart:[]}
   
    default:
        return state;
 } 
}

export default Reducer


/*

*/ 