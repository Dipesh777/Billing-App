const initial = []


const userReducers = (state = initial, action) => {
    switch (action.type) {
        case 'ADD': {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default userReducers