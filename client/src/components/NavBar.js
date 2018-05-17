import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize'



class NavBar extends Component {
    render() {
        return (

            <Navbar className='blue' brand='dialr' right>
                <NavItem onClick={this.props.signOut}>Sign Out</NavItem>

            </Navbar>
        );
    }
}

export default NavBar;