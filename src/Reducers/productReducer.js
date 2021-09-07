import { ALL_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "../Actions/productActions"
const initialValue = []

const productReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ALL_PRODUCTS: {
            return state = action.payload
        }
        case ADD_PRODUCT: {
            return [...state, action.payload]
        }
        case EDIT_PRODUCT: {
            return state.map((ele) => {
                return ele._id === action.payload._id ? { ...action.payload } : ele
            })
        }
        case DELETE_PRODUCT: {
            return state.filter((ele) => {
                return ele._id !== action.payload
            })
        }
        default: {
            return [...state]
        }
    }
}

export default productReducer