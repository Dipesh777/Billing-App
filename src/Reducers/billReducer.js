import { ALL_BILLS, NEW_BILL, DELETE_BILL } from "../Actions/billingAction"
import { LOGOUT } from '../Actions/authActions'
const initialValue = []

const billReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ALL_BILLS: {
            return state = action.payload
        }
        case NEW_BILL: {
            return [...state, action.payload]
        }
        case DELETE_BILL: {
            return state.filter(ele => {
                return ele._id !== action.payload._id
            })
        }
        case LOGOUT: {
            return state = initialValue
        }
        default: {
            return [...state]
        }
    }
}

export default billReducer