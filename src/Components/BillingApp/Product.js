import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import ProductTable from './utilities/ProductTable'
import { startProduct, asyncDeleteProduct } from '../../Actions/productActions'
import AddProduct from './utilities/AddProduct'



const Product = (props) => {
    const dispatch = useDispatch()
    const [switcher, setSwitcher] = useState(false)
    const [searchProduct, setSearchProduct] = useState('')
    const [searchData, setSearchData] = useState([])

    // Products
    const products = useSelector((state) => {
        return state.product
    })

    //Handling Adding new product
    const toggle = () => {
        setSwitcher(!switcher)
    }

    const submitForm = (formData, reset, toggle) => {
        dispatch(startProduct(formData, reset, toggle))
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
                <AddProduct toggle={toggle} submitForm={submitForm} />
            ) : (
                <>
                    <div className='d-flex justify-content-between'>
                        <div className='align-middle'>
                            <input type="text" value={searchProduct} onChange={handleSearch} placeholder='Search'
                                className='me-2 border-bottom border-0 border-dark' />
                            <BsSearch />
                        </div>
                        <button onClick={toggle} className='btn btn-success'>Add Product +</button>
                    </div>
                    < ProductTable products={searchProduct ? searchData : products} DeleteItem={DeleteItem} />
                </>
            )}

        </div>
    )
}

export default Product