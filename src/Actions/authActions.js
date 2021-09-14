import axios from 'axios'
import swal from 'sweetalert'

// Action for Registering new user
export const asyncRegister = (formData, redirect, resetForm) => {
    return () => {
        axios.post('https://dct-billing-app.herokuapp.com/api/users/register', formData)
            .then((response) => {
                const result = response.data
                if (result.errmsg) {
                    swal('User Already Exists', {
                        icon: 'error'
                    })
                } else if (result.errors) {
                    swal(result.message, {
                        icon: 'error'
                    })
                } else {
                    console.log(result)
                    resetForm()
                    redirect()
                    swal('you have successfully Register', {
                        icon: 'success'
                    })
                }
            })
            .catch((error) => {
                swal(error.message, {
                    icon: 'error'
                })
            })
    }
}

// Action for Login User

export const asyncLogin = (formData, resetForm, redirect, handleAuth) => {
    return () => {
        axios.post('https://dct-billing-app.herokuapp.com/api/users/login', formData)
            .then((response) => {
                const result = response.data
                if (result.errors) {
                    swal(result.errors, {
                        icon: 'error'
                    })
                } else {
                    localStorage.setItem('token', result.token)
                    resetForm()
                    swal("successfully logged In", {
                        icon: 'success'
                    })
                    redirect()
                    handleAuth()
                }
            })
            .catch((error) => {
                swal(error.message, {
                    icon: 'error'
                })
            })
    }
}

// Action for Logout Resetting all reducers
export const LOGOUT = 'LOGOUT'
export const startLogout = () => {
    return {
        type: LOGOUT
    }
}
