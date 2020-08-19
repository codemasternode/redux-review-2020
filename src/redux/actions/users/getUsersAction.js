export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING"
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        users
    }
}

export function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING
    }
}

export function fetchUsersFailed(err) {
    return {
        type: FETCH_USERS_FAILED,
        err
    }
}


