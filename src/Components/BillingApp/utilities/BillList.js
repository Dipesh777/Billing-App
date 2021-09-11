import React, { useState } from 'react'
import { BsEyeFill, BsTrash, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { asyncDeleteBill, asyncViewBill } from '../../../Actions/billingAction'
import ViewBill from './ViewBill'

const BillList = (props) => {
    const dispatch = useDispatch()
    const { customers, bills } = props
    const [showModal, setShowModal] = useState(false)
    const [viewBill, setViewBill] = useState({})

    // Handling Pagination
    const [pageNumber, setPageNumber] = useState(0)
    const billPerPage = 10
    const pageVisited = pageNumber * billPerPage
    const displayBills = bills.slice(pageVisited, pageVisited + billPerPage)

    const pageCount = Math.ceil(bills.length / billPerPage)
    const pageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    // handle viewBill
    const billView = (id) => {
        dispatch(asyncViewBill(id, setViewBill))
        setShowModal(true)
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
            <h3>Listing Bills - <span className='text-success'>{displayBills.length}</span></h3>
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
                    {displayBills.map((ele, ind) => {
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

            <ReactPaginate
                previousLabel={<BsArrowLeft />}
                nextLabel={<BsArrowRight />}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName='d-flex justify-content-center text-primary text-decoration-none list-unstyled mt-5'
                previousLinkClassName='text-decoration-none mx-2 border border-success p-2 rounded text-success fs-5'
                nextLinkClassName='text-decoration-none mx-2 border border-success p-2 rounded text-success fs-5'
                pageLinkClassName='text-decoration-none mx-2 border border-dark px-3 py-2 rounded'
                disabledClassName='text-muted'
                activeClassName='fs-5'
            />

            <ViewBill show={showModal} hide={() => setShowModal(false)} viewBill={viewBill} />
        </>
    )
}

export default BillList