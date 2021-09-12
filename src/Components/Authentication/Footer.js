import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt,FaMailBulk } from 'react-icons/fa'

const Footer = (props) => {
    return (
        <div className='bg-light p-2 ps-4 justify-content-between align-items-center d-flex border-top border-dark'>
            <div>
                <h4>Contact Us</h4>
                <p className='text-success m-0'><FaPhoneAlt />  +91 9586-0806-95</p>
                <p className='text-success'><FaMailBulk/> dipesh777rajput@gmail.com</p>
            </div>
            <div className='me-5'>
                <h4 className='mb-4'>Follow Us</h4>
                <FaInstagram className='mx-2 text-primary  fs-4' />
                <FaFacebookF className='mx-2 text-primary  fs-4' />
                <FaTwitter className='mx-2 text-primary  fs-4' />
            </div>
        </div>
    )
}

export default Footer