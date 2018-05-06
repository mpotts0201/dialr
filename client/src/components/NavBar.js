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

            <Navbar brand='dialr' right>
                <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
            </Navbar>
        );
    }
}

export default NavBar;