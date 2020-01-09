import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className="jumbo">
                    <Container fluid>
                        <h1 className="display-3">Let's Fight</h1>
                        <p className="lead">This is Tourney. A place that will take out the hardest part of getting a tournament going,</p>
                        <p className="lead">picking a day and picking a place.</p>
                        <p className="lead">Sign Up and Test Your Might.</p>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>                        <button className="signup-btn">
                                <Link to="/signup">Sign Up</Link>
                            </button></Col>
                            <Col sm={{ size: 'auto', offset: 0 }}>                        <button className="login-btn" >
                                <Link to="/login">Login</Link>
                            </button></Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div >
        );
    };
}