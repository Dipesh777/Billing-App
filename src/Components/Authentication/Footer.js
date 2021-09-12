import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = (props) => {
    return (
        <div className='bg-secondary p-2 ps-4 justify-content-between align-items-center d-flex'>
            <div>
                <h4>Contact As</h4>
                <p className='text-white m-0'>Phone : +91 9586-0806-95</p>
                <p className='text-white'>Email : dipesh777rajput@gmail.com</p>
            </div>
            <div className='text-primary fs-4 d-flex  me-5'>
                <FaInstagram className='mx-2 text-white' />
                <FaFacebookF className='mx-2' />
                <FaTwitter className='mx-2' />
            </div>
        </div>
    )
}

export default Footer