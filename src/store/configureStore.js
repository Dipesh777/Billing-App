import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import userReducers from '../Reducers/userReducers'

const configureStore = (props) => {
    const store = createStore(combineReducers({
        users: userReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore