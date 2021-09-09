import React from 'react'


const ProductTable = (props) => {
    const { products, toggle, productHolder, DeleteItem } = props

    //handling Edit functionlity
    const handleEdit = (productData) => {
        productHolder(productData)
        toggle()
    }

    return (
        <div className='my-3'>
            <h2 className='fw-normal'>Listing Products - <span className='text-success'>{products.length}</span> </h2>
            <table className='table'>
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
                        return <tr key={ele._id}>
                            <td>{ind + 1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.price}</td>
                            <td>
                                <button className='btn btn-warning me-2 px-3' onClick={() => handleEdit(ele)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => DeleteItem(ele._id)}>Delete</button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable