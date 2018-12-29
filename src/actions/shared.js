import { getInitialData } from '../_DATA'
import { receiveUsers } from '../actions/user'
import { receiveQuestions } from '../actions/questions'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}