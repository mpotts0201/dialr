import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContactsList from './ContactsList'
import Home from './Home'
import { Navbar, NavItem } from 'react-materialize'


const Div = styled.div`
display:flex;
justify-content: space-between;
`


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