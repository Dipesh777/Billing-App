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
            <div className='p-4 bg-success m-3 text-white'>
                <p>Business Name - {user.businessName}</p>
                <p>Name - {user.username}</p>
                <p>Email - {user.email}</p>
                <p>Address - {user.address}</p>
            </div>
        </div>
    )
}

export default Account