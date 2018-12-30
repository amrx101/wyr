import {addUser} from "../api/_DATA"
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function handleAddUser(username, name, avatarURL) {
    return (dispatch) => {
        dispatch(showLoading())
        return addUser({
            username,
            name,
            avatarURL
        })
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
    }
}