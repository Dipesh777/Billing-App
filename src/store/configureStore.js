import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import userReducer from '../Reducers/userReducer'

const configureStore = (props) => {
    const store = createStore(combineReducers({
        user: userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore