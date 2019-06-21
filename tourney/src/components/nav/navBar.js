//nav bar vertical, left side.
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink href="/library">Library</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/locations">Venues</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tourney">Tourney</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/user/:userId(\d+)/edit">Update Profile</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}