import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"

const initialState={
    loading: false,
    user: [],
    error:""
}

export const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return{
            
            loading: false,
            user: action.payload,
            error: ""
        }
        case FETCH_USERS_FAILURE: return{
            
            loading: false,
            user: [],
            error: action.payload,
            
        }
        default: return state
    }
}