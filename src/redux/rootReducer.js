import { combineReducers } from "redux";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { cakeReducer } from './cakes/cakeReducer'
import { reducer } from "./user/userReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: reducer
})

export default rootReducer