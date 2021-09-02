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
                // console.log(result)
                dispatch(allCustomer(result))
            })
            .catch((error) => {
                alert('error.message')
            })
    }
}