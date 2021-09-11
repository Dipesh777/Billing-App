import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs'
import { startEditProduct } from '../../../Actions/productActions'
import AddProduct from './AddProduct'


const ProductTable = (props) => {
    const dispatch = useDispatch()
    const { products, DeleteItem } = props
    const [editItem, setEditItem] = useState(false)
    const [product, setProduct] = useState('')


    //handling Edit functionlity
    const toggle = () => {
        setEditItem(!editItem)
    }
    const handleEdit = (productData) => {
        setProduct(productData)
        toggle()
    }

    const submitForm = (formData, toggle, reset, id) => {
        dispatch(startEditProduct(formData, toggle, reset, id))
    }
    return (
        <div>
            {editItem ? (
                <AddProduct toggle={toggle} product={product} submitForm={submitForm} />
            ) : (
                products.length === 0 ? (
                    <div>
                        <h3>No Products Available</h3>
                        <small>Add your products</small>
                        <p>Click on Add Product</p>
                    </div>
                ) : (<>
                    <h2 className='fw-normal'>Listing Products - <span className='text-success'>{products.length}</span> </h2>
                    <table className='table bg-light  my-4'>
                        <thead>
                            <tr>
                                <th>Sr-No</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((ele, ind) => {
                                return <tr key={ele._id} className='align-middle'>
                                    <td>{ind + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.price}</td>
                                    <td className='d-flex justify-content-around'>
                                        <button className='btn btn-warning' onClick={() => handleEdit(ele)}><BsPencilSquare /></button>
                                        <button className='btn btn-danger' onClick={() => DeleteItem(ele._id)}><BsTrashFill /></button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </>
                )
            )}

        </div>
    )
}

export default ProductTable