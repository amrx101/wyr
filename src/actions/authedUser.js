export const AUTHENTICATE_USER = 'AUTHENTICATnE_USER'
export const SIGN_OUT = 'SIGNED_OUT'

export function authenticateUser (id) {
    return {
        type: AUTHENTICATE_USER,
        id
    }
}

export function signOut (id) {
    return {
        type: SIGN_OUT,
        id
    }
}