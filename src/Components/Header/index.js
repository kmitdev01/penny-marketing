import React from 'react';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import PrimaryButton from '../buttons/component/PrimaryButton';
import SearchBar from '../SearchBar';
import { LoginButton, Wrapper } from './style';

const Header = () => {
    return (
        <div>
            <Wrapper>
                    <div>
                        <Navbar
                            color="white"
                            expand="md"
                            light
                        >
                            <NavbarBrand href="/">
                                <img  src="static/images/logo.svg" />
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
                                <SearchBar />
                                <ButtonGroup>
                                    <PrimaryButton title={'LogIn'}/>
                                    {/* <LoginButton>Log In</LoginButton> */}
                                    <PrimaryButton title={'GetStarted'}/>
                                </ButtonGroup>
                               
                              
                            </Collapse>
                        </Navbar>
                    </div>
            </Wrapper>
        </div>
    );
}

export default Header;
