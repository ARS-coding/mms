import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function VerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className="custom-modal-body" >
                <Button className="custom-modal-button" onClick={props.onHide}>X</Button>
                {props.children}
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default VerticallyCenteredModal
