import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <div className="navbar-header">
          <LinkContainer to='/' exact>
            <Navbar.Brand>MEME GENERATOR</Navbar.Brand>
          </LinkContainer>
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className = 'ml-auto'>
          <LinkContainer to='/login'>
            <Nav.Link>
              <i className='fas fa-user'></i> COMMUNITY
            </Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i> SIGN IN
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
