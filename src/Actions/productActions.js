import axios from 'axios'
import swal from 'sweetalert'


// Action for Fetching all product of user
export const ALL_PRODUCTS = 'ALL_PRODUCTS'
const allProducts = (data) => {
    return {
        type: ALL_PRODUCTS,
        payload: data
    }
}

export const asyncProduct = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/products', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(allProducts(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Action for Creating or adding new product to user account
export const ADD_PRODUCT = 'ADD_PRODUCT'
const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}
export const startProduct = (formData, reset, redirect) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(addProduct(result))
                reset()
                swal("Success", "New Product Added Successfully", "success");
                redirect()
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Action For editing or updating a Product 
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
const editProduct = (data) => {
    return {
        type: EDIT_PRODUCT,
        payload: data
    }
}
export const startEditProduct = (formData, toggle, reset, id) => {
    return (dispatch) => {
        swal({
            title: "Are you sure?",
            text: "You Want to save Changes to product",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    // Start Asyn call for edit Product Info
                    axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                        .then((response) => {
                            const result = response.data
                            dispatch(editProduct(result))
                            reset()
                            toggle()
                        })
                        .catch((error) => {
                            alert(error.message)
                        })
                    // End Asyn call for edit Product Info

                    swal("Changes Saved Successfully", {
                        icon: "success",
                    });
                }
            });
    }
}

// Action for Deleting Product from user Account
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
const deleteProduct = (data) => {
    return {
        type: DELETE_PRODUCT,
        payload: data
    }
}
export const asyncDeleteProduct = (id) => {
    return (dispatch) => {
        swal({
            title: "Are you sure?",
            text: "All Bills Will be Deleted of Products",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    // Start Async Deleting product
                    axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                        .then((response) => {
                            const result = response.data
                            dispatch(deleteProduct(result._id))
                        })
                        .catch((error) => {
                            alert(error.message)
                        })
                    // End Async Deleting product
                    
                    swal("Product Deleted Successfully", {
                        icon: "success",
                    });
                }
            });
    }
}