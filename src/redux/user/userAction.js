import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: user
    }
}
export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
}