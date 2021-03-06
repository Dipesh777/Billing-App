import React from 'react'
import { useSelector } from 'react-redux'
import html2pdf from 'html2pdf.js'
import { Modal, Button } from 'react-bootstrap'

const ViewBill = (props) => {
    const { show, hide, viewBill, toggle } = props

    // Store data
    const product = useSelector((state) => {
        return state.product
    })
    const customer = useSelector((state) => {
        return state.customers
    })

    // Handling Modal Close
    const closeModal = () => {
        hide()
        if (typeof toggle === 'function') {
            toggle()
        }
    }

    // Handling Pdf bill download
    const download = () => {
        const opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Old monolithic-style usage:
        html2pdf(document.getElementById('downloadBill'), opt);

    }


    return (
        <Modal show={show} onHide={hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <div id='downloadBill'>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Invoice bill</h3>
                        <p className='fs-6 m-0 text-muted'>Date -
                            {Object.keys(viewBill).length !== 0 && viewBill.date.slice(0, 10).split('-').reverse().join('/')}</p>
                        {customer.map((ele, ind) => {
                            return viewBill.customer === ele._id && <span className='fs-5' key={ind + 1}>Name - {ele.name}</span>
                        })}
                        <br />
                        {customer.map((ele, ind) => {
                            return viewBill.customer === ele._id && <span className='fs-6 m-0 p-0' key={ind + 2}>Contact - {ele.mobile}</span>
                        })} <br />
                        {customer.map((ele, ind) => {
                            return viewBill.customer === ele._id && <span className='fs-6 m-0 p-0' key={ind + 3}>email - {ele.email}</span>
                        })}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Sr-No.</th>
                                <th>Poduct</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>

                        </thead>
                        <tbody>
                            {Object.keys(viewBill).length !== 0 && viewBill.lineItems.map((ele, ind) => {
                                return <tr key={ele._id}>
                                    <td>{ind + 1}</td>
                                    <td>{product.map((prod) => {
                                        return ele.product === prod._id && prod.name
                                    })}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.subTotal}</td>
                                </tr>
                            })}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Amount</td>
                                <td>{viewBill.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
            </div>

            <Modal.Footer>
                <Button onClick={closeModal}>Close</Button>
                <Button onClick={download}>Download</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewBill