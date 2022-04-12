import {
    END_LOADING_USER,
    LOGIN,
    REGISTER,
    SET_AUTHENTICATE,
    SET_CURRENT_USER,
    SET_HAS_PENDING_SECURITY,
    SET_HAS_PENDING_USER_DATA,
    SET_LOGIN_DIALOG_OPEN,
    START_LOADING_USER,
} from 'environment'

const initialState = {
    isAuthenticate: false,
    user: {},
    loadingUser: true,
    loginDialogOpen: false,
    hasPendingUserData: false,
    hasPendingSecurity: false,
}

const authReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case LOGIN:
        case REGISTER:
        case START_LOADING_USER:
            return { ...state, loadingUser: true }
        case END_LOADING_USER:
            return { ...state, loadingUser: false }
        case SET_CURRENT_USER:
            return { ...state, user: payload }
        case SET_AUTHENTICATE:
            return { ...state, isAuthenticate: payload }
        case SET_LOGIN_DIALOG_OPEN:
            return { ...state, loginDialogOpen: payload }
        case SET_HAS_PENDING_USER_DATA:
            return { ...state, hasPendingUserData: payload }
        case SET_HAS_PENDING_SECURITY:
            return { ...state, hasPendingSecurity: payload }
        default:
            return state
    }
}

export default authReducer
