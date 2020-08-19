import { FETCH_USERS_SUCCESS, FETCH_USERS_PENDING, FETCH_USERS_FAILED } from '../actions/users/getUsersAction'
import { DELETE_USER_FAILED, DELETE_USER_PENDING, DELETE_USER_SUCCESS } from '../actions/users/deleteUserAction'

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
        case DELETE_USER_SUCCESS:
            const users = state.users
            for (let i = 0; i < users.length; i++) {
                if (action.id === users[i].id) {
                    users.splice(i, 1)
                    break
                }
            }
            return {
                ...state,
                pending: false,
                users
            }
        case DELETE_USER_FAILED:
            return {
                ...state,
                failed: true,
                pending: false
            }
        case DELETE_USER_PENDING:
            return {
                ...state,
                pending: true
            }
        default:
            return state
    }
}

