import React, { useState } from 'react'
import VerticallyCenteredModal from './../global/VerticallyCenteredModal'
import AddMealForm from './../Forms/AddMealForm'
import { Row, Col, Button } from 'react-bootstrap';
import { useAlert } from 'react-alert'

const ControlNav = () => {
    const [modalShow, setModalShow] = useState(false);
    const alert = useAlert()
    const handleSubmit = async (values) => {
        console.log('values :', values);
        // await db.collection('branches').add(values)
        setModalShow(false)
        alert.success('Congrats you have added a new Branch!')
        // setAlert('user added successfully , you are being redirected to users')
    }
    return (
        <>
            <Row className="nav-bar-control">
                <Col>
                    <Button onClick={() => setModalShow(true)}>Add Item</Button>
                </Col>
                <Col className="text-right">
                    <Button>Edit Board</Button> <Button>Delete Board</Button>
                </Col>
            </Row>
            <VerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Add a new Branch"
            >
                <AddMealForm postData={handleSubmit} />
            </VerticallyCenteredModal>
        </>
    )
}

export default ControlNav
