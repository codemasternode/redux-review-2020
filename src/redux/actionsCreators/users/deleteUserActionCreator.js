import Axios from 'axios'
import { deleteUserSuccess, deleteUserFailed, deleteUserPending } from '../../actions/users/deleteUserAction'

export function deleteUser(id) {
    return dispatch => {
        dispatch(deleteUserPending())
        Axios({
            url: process.env.REACT_APP_API_HOST + "/users/" + id,
            method: "DELETE"
        }).then((response) => {
            dispatch(deleteUserSuccess())
            return response.data
        }).catch(err => {
            dispatch(deleteUserFailed(err))
        })
    }
}