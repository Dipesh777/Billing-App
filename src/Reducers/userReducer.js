import { USER } from '../Actions/billingAppActions'
import { LOGOUT } from '../Actions/authActions'

const initial = {}

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case USER: {
            return state = action.payload
        }
        case LOGOUT: {
            return state = initial
        }
        default: {
            return state
        }
    }
}

export default userReducer