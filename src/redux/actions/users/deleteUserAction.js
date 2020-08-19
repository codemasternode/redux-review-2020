export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS"
export const DELETE_USER_PENDING = "DELETE_USER_PENDING"
export const DELETE_USER_FAILED = "DELETE_USER_FAILED"

export function deleteUserSuccess(id) {
    return {
        type: DELETE_USER_SUCCESS,
        id
    }
}

export function deleteUserPending() {
    return {
        type: DELETE_USER_PENDING
    }
}

export function deleteUserFailed(err) {
    return {
        type: DELETE_USER_FAILED,
        err
    }
}