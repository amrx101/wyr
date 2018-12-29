export const AUTHED_USER = 'AUTHED_USER'
export const SIGN_OUT = 'SIGNED_OUT'

export function authedUser (user) {
    return {
        type: AUTHED_USER,
        user
    }
}

export function signOut (user) {
    return {
        type: SIGN_OUT,
        user
    }
}