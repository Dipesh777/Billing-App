import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs'
import { startDeleteCustomer, asyncEditCustomer } from '../../../Actions/billingAppActions'
import AddCustomers from './AddCustomers'


const CustomerTable = (props) => {
    const dispatch = useDispatch()
    // const element = <FontAwesomeIcon icon={faCoffee} />
    const { data } = props
    const [editForm, setEditForm] = useState(false)
    const [customer, setCustomer] = useState('')

    const toggle = () => {
        setEditForm(!editForm)
    }

    // handleing Edit Functionality
    const handleEdit = (dataObj) => {
        setCustomer(dataObj)
        toggle()
    }

    const submitForm = (formData, toggle, reset, id) => {
        dispatch(asyncEditCustomer(formData, toggle, reset, id))
    }

    // Handling Delete functionlity
    const handleDelete = (id) => {
        dispatch(startDeleteCustomer(id))
    }

    return (
        <>
            <h2>Listing Customers - <span className='text-success'>{data.length}</span> </h2>
            {editForm ? (
                <AddCustomers toggle={toggle} customer={customer} submitForm={submitForm} />
            ) : (
                data.length === 0 ? (
                    <div>
                        <h3>Add Your Customers!</h3>
                        <small>Add your customers</small>
                        <p>click on Add Customer </p>
                    </div>
                ) : (

                    < table className='table my-3'>
                        <thead className='bg-light'>
                            <tr>
                                <th>Sr-no.</th>
                                <th>Name</th>
                                <th>contact</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((ele, ind) => {
                                    return <tr key={ele._id} className='align-middle'>
                                        <td>{ind + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.mobile}</td>
                                        <td>{ele.email}</td>
                                        <td className='d-flex justify-content-around'>
                                            <button className='btn btn-warning py-1' onClick={() => handleEdit(ele)}><BsPencilSquare /></button>
                                            <button onClick={() => handleDelete(ele._id)} className='btn btn-danger'><BsTrashFill /></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                )
            )}

        </>
    )
}

export default CustomerTable