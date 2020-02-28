import '../../modules/UpdateProfileButton'
import collectSessStorage from '../../modules/UpdateProfileButton';
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
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
          <NavbarBrand><h1>Tourney</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link type="button" className="btn btn-success" to="/library">Library</Link>
                
              </NavItem>
              <NavItem>
                <Link type="button" className="btn btn-success" to="/locations">Venues</Link>
              </NavItem>
              <NavItem>
                <Link type="button" className="btn btn-success" to="/tourney">Tournaments</Link>
              </NavItem>
              <NavItem>
              <div
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push(`/user/${collectSessStorage()}/edit`)
          }}>Update Preferences</div>
              </NavItem>
              <NavItem>
              <Link
          type="button"
          className="btn btn-success"
          to="/"
          onClick={() => {
            console.log(sessionStorage.getItem('credentials'))
            sessionStorage.setItem("credentials", null);
            console.log(sessionStorage.getItem('credentials'))
          }}>Log Out</Link>
              </NavItem> 
            </Nav>
        </Navbar>
      </div>
    );
  }
}
export default withRouter ( Header )