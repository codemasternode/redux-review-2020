import { combineReducers, createStore, applyMiddleware } from 'redux'
import { usersReducer } from "./reducers/usersReducer"
import reduxThunk from 'redux-thunk'

const reducer = combineReducers({ users: usersReducer })
const store = createStore(reducer, applyMiddleware(reduxThunk))

export default store


