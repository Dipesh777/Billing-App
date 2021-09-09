import axios from 'axios'

// Action Of getting LoggedIn user Account
export const USER = 'USER'
const user = (data) => {
    return {
        type: USER,
        payload: data
    }
}
export const asyncUser = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(user(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Action for Getting all customers of user
export const ALL_CUSTOMER = 'ALL_CUSTOMER'
const allCustomer = (data) => {
    return {
        type: ALL_CUSTOMER,
        payload: data
    }
}
export const startCustomers = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/customers', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(allCustomer(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Action for Creating or Adding New Customer
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
const addCustomer = (data) => {
    return {
        type: ADD_CUSTOMER,
        payload: data
    }
}
export const asycAddCustomer = (formData, toggle, reset) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/customers', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.errors) {
                    alert(result.message)
                } else {
                    dispatch(addCustomer(result))
                    reset()
                    toggle()
                }

            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Action for Edit Detail of customer
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER'
const editCustomer = (data) => {
    return {
        type: EDIT_CUSTOMER,
        payload: data
    }
}
export const asyncEditCustomer = (formData, toggle, reset, id) => {
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.errors) {
                    alert(result.message)
                } else {
                    dispatch(editCustomer(result))
                    reset()
                    toggle()
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

}

// Action for Deleting customers
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
const deleteCustomer = (_id) => {
    return {
        type: DELETE_CUSTOMER,
        payload: _id
    }
}
export const startDeleteCustomer = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(deleteCustomer(result._id))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}