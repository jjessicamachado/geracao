/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";


class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="pe-7s-bell" />
        <b className="caret" />
        <span className="notification">4</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
                <Nav pullLeft>
          <NavItem eventKey={1} href="#att">
            Atualizado há 30 segundos.
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="./logout">
            Logout
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Usina X aumentou em 70Kv</MenuItem>
            <MenuItem eventKey={2.2}>Nova Solicitação!</MenuItem>
            <MenuItem eventKey={2.3}>Usina Y aumentará 200Kv em 10min</MenuItem>
            <MenuItem eventKey={2.4}>Usina Barra Funda diminuirá para potência mínima.</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
