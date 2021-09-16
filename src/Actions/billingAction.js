import axios from '../config/axios-config'
import swal from 'sweetalert'

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
        axios.get('/bills', {
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
export const asyncNewBill = (formData, reset, setViewBill, setShowModal) => {
    return (dispatch) => {

        // Start Async call for generating bill
        axios.post('/bills', formData, {
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
                    setViewBill(result)
                    swal("Successfully", "Bill Generated", "success");
                    reset()
                    setShowModal(true)
                }
            })
            .catch((error) => {
                swal(error.message, {
                    icon: 'error'
                })
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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Bill",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // Start Async Delete bill operation
                    axios.delete(`/bills/${id}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                        .then((response) => {
                            const result = response.data
                            dispatch(deleteBill(result))
                            swal("Bill has been deleted!", {
                                icon: "success",
                            });
                        })
                        .catch((error) => {
                            swal(error.message, {
                                icon: 'error'
                            })
                        })
                    // End Async Delete bill operation
                }
            });
    }
}

// Action for view Bills using bill id
export const asyncViewBill = (id, setViewBill) => {
    return () => {
        axios.get(`/bills/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                setViewBill(result)
            })
            .catch((error) => {
                swal(error.message, {
                    icon: "error",
                });
            })
    }
}