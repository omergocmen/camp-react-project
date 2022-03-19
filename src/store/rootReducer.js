import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from './reducers/categoryReducer'
import paginationReducer from "./reducers/paginationReducer";
import authReducer from './reducers/authReducer'


const rootReducer=combineReducers({
    cart : cartReducer,
    category:categoryReducer,
    pagination:paginationReducer,
    auth:authReducer
})


export default rootReducer;