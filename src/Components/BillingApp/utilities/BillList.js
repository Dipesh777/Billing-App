import React, { useState } from 'react'
import { BsEyeFill, BsTrash } from 'react-icons/bs'
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

    // // Modal View Bill Show Data
    // const modalData = () => {
    //     const modalCustomer = customers.find(ele => {
    //         if (Object.keys(viewBill).length !== 0) {
    //             return viewBill.customer === ele._id
    //         }
    //     })
    //     if (Object.keys(viewBill).length !== 0) {
    //         const modalProduct = viewBill.lineItems.map((ele) => {
    //             products.filter((ele) => {
    //                 return ele.product === ele._id
    //             })
    //         })
    //     }
    //     console.log('modalCustomer', modalCustomer)
    //     console.log('modalProduct', modalCustomer)
    // }

    // handle viewBill
    const billView = (id) => {
        dispatch(asyncViewBill(id, setViewBill))
        setShowModal(true)
        // modalData()
    }

    // Listing name
    const customerName = (id) => {
        const result = customers.find((ele) => {
            return ele._id === id
        })
        return result ? result.name : 'Customer Deleted'
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
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((ele, ind) => {
                        return (
                            <tr key={ele._id} className='align-middle'>
                                <td>{ind + 1}</td>
                                <td>{customerName(ele.customer)}</td>
                                <td>{ele.date.slice(0, 10).split('-').reverse().join('-')}</td>
                                <td>
                                    <button className='btn btn-info mx-2' onClick={() => billView(ele._id)}><BsEyeFill /></button>
                                    <button className='btn btn-danger' onClick={() => handleDelete(ele._id)}><BsTrash /></button>
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