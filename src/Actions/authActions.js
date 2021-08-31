import axios from 'axios'

// Action for Registering new user
export const asyncRegister = (formData, redirect, resetForm) => {
    return () => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', formData)
            .then((response) => {
                const result = response.data
                if (result.errmsg) {
                    alert('User Already Exists')
                } else if (result.errors) {
                    alert(result.message)
                } else {
                    console.log(result)
                    resetForm()
                    redirect()
                    alert('you have successfully Register')
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}