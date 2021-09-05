import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ProductTable from './utilities/ProductTable'
import { asyncProduct, startEditProduct, asyncDeleteProduct } from '../../Actions/productActions'
import AddProduct from './utilities/AddProduct'



const Product = (props) => {
    const dispatch = useDispatch()
    const [switcher, setSwitcher] = useState(false)
    const [editProduct, setEditProduct] = useState('')

    // Products
    const products = useSelector((state) => {
        return state.product
    })

    useEffect(() => {
        dispatch(asyncProduct())
    }, [])

    // Handleing Edit functionlity
    const productHolder = (data) => {
        setEditProduct(data)
    }

    const submitForm = (formData, toggle, reset, id) => {
        dispatch(startEditProduct(formData, toggle, reset, id))
    }

    const toggle = () => {
        setSwitcher(!switcher)
    }

    // Handling Delete Functionality
    const DeleteItem = (id) => {
        dispatch(asyncDeleteProduct(id))
    }

    return (
        <div className='m-3'>
            <header>
                <h3 className='p-2 text-center bg-light border rounded'>Products</h3>
            </header>

            {/* For Edit OR listing product */}
            {switcher ? (
                <AddProduct toggle={toggle} product={editProduct} submitForm={submitForm} />
            ) : (
                <>
                    <Link to='/product/addproduct' className='btn btn-success'>Add Product +</Link>
                    < ProductTable products={products} toggle={toggle} productHolder={productHolder} DeleteItem={DeleteItem} />
                </>
            )}

        </div>
    )
}

export default Product