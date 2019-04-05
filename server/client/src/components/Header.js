import React, {Component} from 'react';
import logo from '../images/logo.png'
import SearchBar from './SearchBar'

import {
  Collapse, Navbar, Nav,
  NavbarBrand, NavbarToggler
} from 'reactstrap';

class Header extends Component {
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

  render(){
    return (
      <header>
        <Navbar fixed="top" color="light" light expand="md" className="border-bottom border-gray bg-light" >
          <NavbarBrand href="/"><img src={logo} /></NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <SearchBar />
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header;