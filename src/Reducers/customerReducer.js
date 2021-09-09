
import { ALL_CUSTOMER, ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from '../Actions/billingAppActions'
const initialValue = []

const customerReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ALL_CUSTOMER: {
            return [...action.payload]
        }
        case ADD_CUSTOMER: {
            return [...state, action.payload]
        }
        case EDIT_CUSTOMER: {
            return state.map(ele => {
                if (ele._id === action.payload._id) {
                    return { ...action.payload }
                } else {
                    return ele
                }
            })
        }
        case DELETE_CUSTOMER: {
            return state.filter((ele) => {
                return ele._id !== action.payload
            })
        }
        default: {
            return [...state]
        }
    }
}

export default customerReducer