export const subtotal= (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
    basket : [],
    user : null
};

export default function reducer(state, action){
    switch(action.type) {
        case 'SET_USER':
            console.log('logged in');
            return{
                ...state, 
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        //Logic for adding item to basket 
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
         
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
            console.log(index);

            if(index >= 0){
                newBasket.splice(index,1);
                console.log('spliced basket');
            }
            return {
                ...state,
                basket: newBasket,
                }
        default:
            return state;
    }
}