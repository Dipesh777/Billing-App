
import { ALL_CUSTOMER, ADD_CUSTOMER, DELETE_CUSTOMER } from '../Actions/billingAppActions'
const initialValue = []

const customerReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ALL_CUSTOMER: {
            return [...action.payload]
        }
        case ADD_CUSTOMER: {
            return [...state, action.payload]
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