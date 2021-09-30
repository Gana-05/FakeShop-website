import { ActionTypes } from "../constants/constants"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: {...product}
    }
}
export const removeSelectdProduct = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}