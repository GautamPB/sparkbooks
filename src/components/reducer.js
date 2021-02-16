export const initialState = {
    cart: [],
    user: null,
    path: '/',
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
            return { state }

        default:
            return state
    }
}

export default reducer
