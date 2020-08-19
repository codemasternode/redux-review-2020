import Axios from 'axios'
import { fetchUsersSuccess, fetchUsersFailed, fetchUsersPending } from '../../actions/users/getUsersAction'

export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersPending())
        Axios({
            url: process.env.REACT_APP_API_HOST + "/users",
            method: "GET"
        }).then((response) => {
            dispatch(fetchUsersSuccess(response.data))
            return response.data
        }).catch(err => {
            dispatch(fetchUsersFailed(err))
        })
    }
}