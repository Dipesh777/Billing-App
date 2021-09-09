import { ALL_BILLS, NEW_BILL } from "../Actions/billingAction"
const initialValue = []

const billReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ALL_BILLS: {
            return state = action.payload
        }
        case NEW_BILL: {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default billReducer