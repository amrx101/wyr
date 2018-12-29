export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestion (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}