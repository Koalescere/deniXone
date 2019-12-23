import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );

        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">deniXone </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );

    }
}
const mapStateToProps = state => ({
    auth: state.auth
})


// function Searchbar() {
//     return(
     
//       <div>
//       <nav className="drops navbar navbar-expand-lg navbar-dark">
  
//   <select class="selex">
//     <option>Small select</option>
//     <option>Small select</option>
//     <option>Small select</option>
//   </select>
  
//   <select class="selex">
//     <option>Small select</option>
//     <option>Small select</option>
//     <option>Small select</option>
//   </select>
  
//   <select class="selex">
//     <option>Small select</option>
//     <option>Small select</option>
//     <option>Small select</option>
//   </select>
  
//   <select class="selex">
//     <option>Small select</option>
//     <option>Small select</option>
//     <option>Small select</option>
//   </select>
  
//   <select class="selex">
//     <option>Small select</option>
//     <option>Small select</option>
//     <option>Small select</option>
//   </select>
  
//   <select class="selex">
//     <option>Small select</option>
//     <option>Small select</option>
//     <option>Small select</option>
//   </select>
    
//     <div className="btndiv">
//     <input class="btn btn-sm" type="submit" value="Submit" />
//       </div>
        
//        </nav>
//        </div>
    
//     );
//       }
  

export default connect(mapStateToProps, null)(AppNavbar);

       /* <div className="accountdrop" id="righttitle">
        <div className="dropdown" id="accountdiv">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-alt"></i>
            </a>
          
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Account</a>
              <a className="dropdown-item" href="#">Favorites</a>
              <a className="dropdown-item" href="#">Log out</a>
            </div>
          </div>
    </div> */

    /* <container>
         <row>
           <col>
                <select class="form-control form-control-sm">
                  <option>Small select</option>
                </select>
           </col>

           <col>
                <select class="form-control form-control-sm">
                  <option>Small select</option>
                </select>
           </col>

           <col>
               <select class="form-control form-control-sm">
                  <option>Small select</option>
                </select>
           </col>
               
           <col>
                 <select class="form-control form-control-sm">
                  <option>Small select</option>
                </select>
           </col>

           <col>
                 <select class="form-control form-control-sm">
                  <option>Small select</option>
                </select>
           </col>

           <col>
                <select class="form-control form-control-sm">
                  <option>Small select</option>
                </select>
           </col>
         </row>
         </container> */
