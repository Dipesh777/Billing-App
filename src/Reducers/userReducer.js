import { USER } from '../Actions/billingAppActions'

const initial = {}

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case USER: {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

export default userReducer