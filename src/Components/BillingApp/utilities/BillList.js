import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncDeleteBill, asyncViewBill } from '../../../Actions/billingAction'
import ViewBill from './ViewBill'

const BillList = (props) => {
    const dispatch = useDispatch()
    const { customers, bills } = props
    const [showModal, setShowModal] = useState(false)
    const [viewBill, setViewBill] = useState({})
    console.log('bill', viewBill)

    // All Products
    const products = useSelector((state) => {
        return state.product
    })
    console.log('products', products)

    // Modal View Bill Show Data
    const modalData = (billid) => {
        const modalCustomer = customers.find(ele => {
            return billid === ele._id
        })
        const lineItem = viewBill.lineItems
        // const modalProduct = products.filter(ele => {
        //     lineItem.forEach(prod => {
        //         return prod.product === ele._id
        //     })
        // })
        console.log('modalCustomer', modalCustomer)
        console.log('modalProduct', lineItem)
    }


    // Listing name
    const customerName = (id) => {
        const result = customers.find((ele) => {
            return ele._id === id
        })
        return result ? result.name : 'Customer Deleted'
    }

    // handle viewBill
    const billView = (id) => {
        dispatch(asyncViewBill(id, setViewBill))
        setShowModal(true)
        setTimeout(() => {

            modalData(viewBill.customer)
        }, 5000)
    }

    // handle Delete
    const handleDelete = (id) => {
        dispatch(asyncDeleteBill(id))
    }


    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr-No</th>
                        <th>Customer</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((ele, ind) => {
                        return (
                            <tr key={ele._id}>
                                <td>{ind + 1}</td>
                                <td>{customerName(ele.customer)}</td>
                                <td>
                                    <button className='btn btn-info mx-2' onClick={() => billView(ele._id)}>View Bill</button>
                                    <button className='btn btn-danger' onClick={() => handleDelete(ele._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <ViewBill show={showModal} hide={() => setShowModal(false)} viewBill={viewBill} />
        </>
    )
}

export default BillList