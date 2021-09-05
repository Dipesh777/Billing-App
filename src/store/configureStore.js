import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import userReducer from '../Reducers/userReducer'
import customerReducer from '../Reducers/customerReducer'
import productReducer from '../Reducers/productReducer'

const configureStore = (props) => {
    const store = createStore(combineReducers({
        user: userReducer,
        customers: customerReducer,
        product: productReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore