import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ViewBill = (props) => {
    const { show, hide, viewBill } = props
    return (
        <Modal show={show} onHide={hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{viewBill.customer}</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewBill