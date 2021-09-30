import { combineReducers } from "redux";
import { ProductReducer , selectedProductReducer} from "./productReducer";

export const rootReducer = combineReducers({
    allProducts : ProductReducer,
    product : selectedProductReducer
})