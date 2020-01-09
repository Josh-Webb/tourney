import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Footer extends React.Component {
  render() {
    return (
      <Container style={footerStyle}>
        <Row>
          <Col>Tourney</Col>
        </Row>
        </Container >
    )
  }
}

const footerStyle = {
    background: 'rgb(140, 100, 70)',
    color: '#fff',
    textAlign: 'center',
    verticalAlign: 'text-bottom',
    padding: '30px',
    fontFamily: 'helvetica'
  }
  