
import { ALL_CUSTOMER } from '../Actions/billingAppActions'
const initialValue = []

const customerReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ALL_CUSTOMER: {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default customerReducer