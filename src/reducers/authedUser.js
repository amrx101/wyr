import { AUTHENTICATE_USER } from '../actions/authedUser'

export default function authenticateUser (state = {}, action) {
    switch(action.type){
        case AUTHENTICATE_USER:
            return action.id
        default:
            return state
    }

}