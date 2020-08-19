import { FETCH_USERS_SUCCESS, FETCH_USERS_PENDING, FETCH_USERS_FAILED } from '../actions/users/getUsersAction'

const initialState = {
    pending: false,
    users: [],
    failed: false
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                pending: false
            }
        case FETCH_USERS_PENDING:
            return {
                ...state,
                pending: false
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                pending: false,
                failed: true
            }
        default:
            return state
    }
}