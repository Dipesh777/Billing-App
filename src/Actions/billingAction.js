import axios from 'axios'

// Action for fetching All bills
export const ALL_BILLS = 'ALL_BILLS'
const allBills = (data) => {
    return {
        type: ALL_BILLS,
        payload: data
    }
}
export const startAllBills = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/bills', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(allBills(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Action for generating new bill for customer in user account
export const NEW_BILL = 'NEW_BILL'
const newBill = (data) => {
    return {
        type: NEW_BILL,
        payload: data
    }
}
export const asyncNewBill = (formData, toggle, reset) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/bills', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.errors) {
                    alert(result.message)
                } else {
                    dispatch(newBill(result))
                    alert('successFull')
                    reset()
                    toggle()
                }
            })
            .catch((error) => {
                alert('Unsuccessful')
                alert(error.message)
            })
    }
}

// Action for deleting bills 
export const DELETE_BILL = 'DELETE_BILL'
const deleteBill = (data) => {
    return {
        type: DELETE_BILL,
        payload: data
    }
}
export const asyncDeleteBill = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(deleteBill(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Action for view Bills using bill id
export const asyncViewBill = (id, setViewBill) => {
    return () => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                setViewBill(result)
            })
    }
}