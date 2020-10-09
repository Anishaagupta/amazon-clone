export const initialState = {
    cart:[],
    user:null
}
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{

    switch(action.type){
        case 'SET_USER':
            return {
                ...state, user: action.user
            }
        case 'ADD_TO_CART':
            return{...state, cart:[...state.cart, action.item]};
        case 'REMOVE_FROM_CART':
            // clone the cart
             let newCart = [...state.cart];
             const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
             if(index >= 0){
                 // if product exists , remove it from cart
                newCart.splice(index, 1);
             }else{
                console.warn(`Can't remove product (id: ${action.id} as it's not in the cart.)`);
             }
            return{...state, cart: newCart};
        default:
            return state; 
    }

}

export default reducer;

