import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import userReducer from '../Reducers/userReducer'
import customerReducer from '../Reducers/customerReducer'

const configureStore = (props) => {
    const store = createStore(combineReducers({
        user: userReducer,
        customers: customerReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore