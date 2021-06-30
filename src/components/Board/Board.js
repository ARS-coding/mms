import { Button } from 'react-bootstrap';
import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './../../assets/css/board.css'
const Board = (props) => {
    const id = props.match.params.id
    return (
        <main>
            <Container className="mt-100px min-h-100">
                {id}

                <Row className="nav-bar-control">
                    <Col>
                        <Button>Add Item</Button>
                    </Col>
                    <Col className="text-right">
                        <Button>Edit Board</Button> <Button>Delete Board</Button>
                    </Col>
                </Row>
                <Row className="fields">
                    <Col lg={4} md={12} className="to-do">
                        <div className="col-body-field field-body">
                            1
                        </div>
                    </Col>
                    <Col lg={4} md={12} className="doing">
                        <div className="col-body-field field-body">
                            2
                        </div>
                    </Col>
                    <Col lg={4} md={12} className="did">
                        <div className="col-body-field field-body">
                            3
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Board
