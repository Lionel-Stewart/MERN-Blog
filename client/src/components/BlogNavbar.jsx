import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class BlogNavbar extends Component {
  state = {
    isOpen: true
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <i className="fa fa-code"></i>
            <NavbarBrand href="/">REST Blog</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav navbar>
                <NavItem>
                  <NavLink href="/">
                    Home
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav navbar>
                <NavItem>
                  <NavLink href="/blogs/new">
                    New Post
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/bradtraversy/mern_shopping_list">
                    Github Repo
                  </NavLink>
                </NavItem>
              </Nav>

            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default BlogNavbar;