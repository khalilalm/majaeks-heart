import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <main>
                <header className="container">
                    <Navbar className="navbar-expand-lg" dark sticky="top" expand="md">
                        <NavbarBrand className="mr-auto" href="/home"><img src="assets/images/MH-Icon-25.png" alt="Majaek's Heart Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} data-toggle="collapse" data-target="#expandMenu" aria-controls="#expandMenu" aria-label="Toggle Navigation" />
                        <Collapse isOpen={this.state.isNavOpen} navbar id="expandMenu">
                            <Nav navbar className="ml-auto mr-5">
                                <NavItem>
                                    <NavLink className="nav-link text-white px-4" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-white px-4" to="/aboutus">About Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
                </main>
            </React.Fragment>
        );
    }
}

export default Header;