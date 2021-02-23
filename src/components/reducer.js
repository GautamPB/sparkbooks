export const initialState = {
    cart: [],
    user: null,
    path: '/',
    subtotal: 0,
}

export const getCartTotal = (cart) => {
    cart?.reduce((amount, item) => item.price + amount, 0)
}

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_PATH: 'SET_PATH',
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }

        case actionTypes.SET_PATH:
            return {
                ...state,
                path: action.path,
            }

        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.item],
            }

        case actionTypes.REMOVE_FROM_CART:
            //logic to remove from the cart.
            let newCart = [...state.cart] //clone that basket

            const index = state.cart.findIndex(
                (cartItem) => cartItem.title === action.title
            )

            if (index >= 0) {
                newCart.splice(index, 1)
            }

            return { ...state, cart: newCart }

        default:
            return state
    }
}

export default reducer
