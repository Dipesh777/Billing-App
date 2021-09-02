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