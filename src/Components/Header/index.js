import React from 'react';
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { Wrapper } from './style';

const Header = () => {
    return (
        <div>
            <Wrapper>
                    <div>
                        <Navbar
                            color="light"
                            expand="md"
                            light
                        >
                            <NavbarBrand href="/">
                                <img  src="static/icons/logo.svg" />
                            </NavbarBrand>
                            <NavbarToggler onClick={function noRefCheck() { }} />
                            <Collapse navbar>
                                <Nav
                                    className="me-auto"
                                    navbar
                                >
                                    <NavItem>
                                        <NavLink href="/components/">
                                        Penny Profit
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        Your Money
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        Jars
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        Features
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        Pricing
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        Security
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        User Stories
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        blog
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                        how to
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <NavbarText>
                                Get Started
                                </NavbarText>
                            </Collapse>
                        </Navbar>
                    </div>
            </Wrapper>
        </div>
    );
}

export default Header;
