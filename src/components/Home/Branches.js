import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import db from './../../firebaseConfig'

const Branches = () => {
    const [branches, setBranches] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetchBranches()
    }, [])
    const fetchBranches = async () => {
        setMessage('Loading ...')

        db.collection("branches").onSnapshot((snapshot) => {
            const branchesArray = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setBranches(branchesArray)
        })
        branches.length === 0 ? setMessage("You have no Branches ...") : setMessage("")
    }

    return (
        <section className="branches">
            <Container>
                <h3 className="services-title">Your Branche's  <span className="bg-dark light-colored"> .Boards</span></h3>
                <Row>
                    {
                        branches.length !== 0 ?
                            branches.map(branch => {
                                return (
                                    <Col key={branch.id} lg={4} md={6} className="branch-item">
                                        <div className="card-body-image">
                                            <img className="avatar" src={branch.branchAvatar} alt="" />
                                            <div className="over-lay-bg-color"></div>
                                            <Link to={`branch/${branch.id}`} className="overlay custom-overlay-bg">
                                                <span>{branch.branchName}</span>
                                                <br />
                                                <small>{branch.branchLocation}</small>
                                            </Link>
                                        </div>
                                    </Col>
                                )
                            })
                            :
                            message
                    }
                </Row>
            </Container>
        </section >
    )
}

export default Branches
