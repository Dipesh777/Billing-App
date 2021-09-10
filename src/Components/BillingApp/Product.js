import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import ProductTable from './utilities/ProductTable'
import { startEditProduct, asyncDeleteProduct } from '../../Actions/productActions'
import AddProduct from './utilities/AddProduct'



const Product = (props) => {
    const dispatch = useDispatch()
    const [switcher, setSwitcher] = useState(false)
    const [editProduct, setEditProduct] = useState('')
    const [searchProduct, setSearchProduct] = useState('')
    const [searchData, setSearchData] = useState([])

    // Products
    const products = useSelector((state) => {
        return state.product
    })

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

    // handleSearch
    const handleSearch = (event) => {
        const input = event.target.value
        setSearchProduct(input)
        const result = products.filter(ele => {
            return ele.name.toLowerCase().includes(input)
        })
        setSearchData(result)
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
                    <div className='d-flex justify-content-between'>
                        <div className='align-middle'>
                            <input type="text" value={searchProduct} onChange={handleSearch} placeholder='Search'
                                className='me-2 border-bottom border-0 border-dark' />
                            <BsSearch />
                        </div>
                        <Link to='/product/addproduct' className='btn btn-success'>Add Product +</Link>
                    </div>
                    < ProductTable products={searchProduct ? searchData : products} toggle={toggle} productHolder={productHolder} DeleteItem={DeleteItem} />
                </>
            )}

        </div>
    )
}

export default Product