import { createStore, combineReducers } from "redux"
import userReducers from '../Reducers/userReducers'

const configureStore = (props) => {
    const store = createStore(combineReducers({
        users: userReducers
    }))
    return store
}

export default configureStore