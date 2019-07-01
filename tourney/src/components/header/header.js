// import React from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'reactstrap';
import '../../modules/UpdateProfileButton'
// // import './header'
// import {withRouter} from 'react-router-dom'
import collectSessStorage from '../../modules/UpdateProfileButton';

// class Header extends React.Component {
//   // handleClick = e => {
//   //   console.log('clicked logout', e);
//   //   sessionStorage.clear()
//   //   this.props.history.push('/')
//   // }

// //   render() {
// //     return (
// //       <Container style={headerStyle}>
        
// //         <Row id="headerRow">
// //           <Col>Tourney</Col>
// //           <button
// //           type="button"
// //           className="btn btn-success"
// //           onClick={() => {
// //             this.props.history.push(`/user/${collectSessStorage()}/edit`)
// //           }}>Update Preferences</button>
// //           {/* <button
// //           type="button"
// //           className="btn btn-success"
// //           onClick={this.handleClick}>Log Out</button> */}
// //         </Row>
// //         </Container >
// //     )
// //   }
// // }

// // const headerStyle = {
// //   background: '#424242',
// //   color: '#092691',
// //   padding: '30px',
// //   fontFamily: 'helvetica',
// //   marginBottom: '30px'
// // }
// render() {
//   return (
// <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
//   </Navbar>)}}


// export default withRouter (Header)
import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        <Navbar expand="md">
          <NavbarBrand href="/">Tourney</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link type="button" to="/library" className="btn">Library</Link>
                
              </NavItem>
              <NavItem>
                <Link type="button" to="/locations" className="btn">Venues</Link>
              </NavItem>
              <NavItem>
                <Link type="button" to="/tourney" className="btn">Tournaments</Link>
              </NavItem>
              <NavItem>
              <Link
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push(`/user/${collectSessStorage()}/edit`)
          }}>Update Preferences</Link>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle> */}
                {/* <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu> */}
              {/* </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter ( Header )