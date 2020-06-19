import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import logo from "../logo.png"; 
import '../App.css';

class Header extends Component {
    constructor(props) {
      super(props);
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false,
        isModalOpen: false,
      };
    }
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen,
      });
    }
    toggleModal = () => {
      this.setState({ isModalOpen: !this.state.isModalOpen });
    };
    handleLogin = (event) => {
      console.log("hi");
      alert(`Username:${this.username.value} Password:${this.password.value}
      Remember: ${this.remember.checked}`);
      this.toggleModal();
      event.preventDefault();
    };
    render() {
      return (
        <React.Fragment>
           <Navbar dark sticky="top" expand="md">
            <div className="container">
            <NavbarBrand className="mr-auto" href="/">
                <img
                  src= { logo }
                  height="60"
                  width="60"
                  class="d-inline-block align-top"
                  alt="NuCamp Press Logo"
                />
            </NavbarBrand>
              <NavbarToggler onClick={this.toggleNav} />
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/">
                      <i className="fas fa-microphone fa-lg" /> Home
                    </NavLink>
                  </NavItem>
                </Nav>
                <span className="navbar-text ml-auto">
                  <Button onClick={this.toggleModal} style={{ 'color' : 'Purple'}}>
                    <i className="fa fa-sign-in fa-lg" /> Login
                  </Button>
                </span>
              </Collapse>
            </div>
          </Navbar>
          <Jumbotron fluid>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1> 
                    NuCamp Press Podcasts
                  </h1>
                  <h2>listen to all of your favorite authors!</h2>
                </div>
              </div>
            </div>
          </Jumbotron>
         
          
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    innerRef={(input) => (this.username = input)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={(input) => (this.password = input)}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="remember"
                      innerRef={(input) => (this.remember = input)}
                    />
                    Remember me
                  </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Login
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </React.Fragment>
        
      );
    }
  }
  
  export default Header;