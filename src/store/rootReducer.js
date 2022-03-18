import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from './reducers/categoryReducer'
import paginationReducer from "./reducers/paginationReducer";


const rootReducer=combineReducers({
    cart : cartReducer,
    category:categoryReducer,
    pagination:paginationReducer
})


export default rootReducer;