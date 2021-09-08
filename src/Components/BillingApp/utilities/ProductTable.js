import React from 'react'
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs'


const ProductTable = (props) => {
    const { products, toggle, productHolder, DeleteItem } = props

    //handling Edit functionlity
    const handleEdit = (productData) => {
        productHolder(productData)
        toggle()
    }

    return (
        <div>
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
        </div>
    )
}

export default ProductTable