import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContactsList from './ContactsList'
import Home from './Home'

const Div = styled.div`
display:flex;
justify-content: space-between;
`


class NavBar extends Component {
    render() {
        return (

            <div title="dialr">
                Navbar
            </div>
        );
    }
}

export default NavBar;