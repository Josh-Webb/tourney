import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../modules/UpdateProfileButton'
import {withRouter} from 'react-router-dom'
import collectSessStorage from '../../modules/UpdateProfileButton';

class Header extends React.Component {
  render() {
    return (
      <Container style={headerStyle}>
        <Row>
          <Col>Tourney</Col>
          <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push(`/user/${collectSessStorage()}/edit`)
          }}>Update Preferences</button>
        </Row>
        </Container >
    )
  }
}

const headerStyle = {
  background: 'rgb(140, 100, 70)',
  color: '#092691',
  padding: '30px',
  fontFamily: 'helvetica',
  marginBottom: '30px'
}

export default withRouter (Header)