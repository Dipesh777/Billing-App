import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncUser } from '../../Actions/billingAppActions'

const Account = (props) => {
    const dispatch = useDispatch()

    const user = useSelector((state) => {
        return state.user
    })

    useEffect(() => {
        dispatch(asyncUser())
    }, [])
    return (
        <div>
            <h3 className='p-2 text-center bg-light border border m-3'>Account</h3>
            <div className='p-4 bg-light m-3 border border-success'>
                <p> Business Name - <span className='text-success'>{user.businessName}</span></p>
                <p> Name - <span className='text-success'>{user.username}</span></p>
                <p> Email -  <span className='text-success'>{user.email}</span></p>
                <p> Address - <span className='text-success'>{user.address}</span></p>
            </div>
        </div>
    )
}

export default Account