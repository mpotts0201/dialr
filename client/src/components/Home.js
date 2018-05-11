import React, { Component } from 'react';
import ContactsList from './ContactsList'
import NavBar from './NavBar'
import { Button, Icon, Card, CardTitle } from 'react-materialize'
import NewContact from './NewContact'
import axios from 'axios'
import { userIsLoggedIn, setAxiosDefaults } from '../util/SessionHeaderUtil'
import Search from './Search'
import EditContact from './EditContact'
import image from '../img/default_img.jpg'
import { Link } from 'react-router-dom'
import Type from './Type'



class Home extends Component {


    state = {
        showNew: false,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        contactType: '',

    }



    toggleNew = () => {
        this.setState({ showNew: !this.state.showNew })
    }




    getContacts = () => {
        this.props.getContacts()
    }

    render() {
        return (
            <div>
                <NavBar signOut={this.props.signOut}
                />
                <Search search={this.props.search}
                    handleChange={this.props.handleChange} />
                {this.props.showBad === true
                    ? <h3>Bad search, please try again</h3>
                    : null}

                <br />
                <br />

                <NewContact handleChange={this.props.handleChange}
                    first_name={this.props.first_name}
                    last_name={this.props.last_name}
                    phone={this.props.phone}
                    email={this.props.email}
                    address={this.props.address}
                    handleSubmit={this.props.handleSubmit}
                    contactType={this.props.contactType}
                    setType={this.props.setType}
                />

                <Type selectType={this.props.selectType}
                    getContacts={this.props.getContacts}
                />



                <ContactsList contacts={this.props.contacts}
                    handleChange={this.props.handleChange}
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    phone={this.state.phone}
                    email={this.state.email}
                    address={this.state.address}
                    contactType={this.state.contactType}
                    getContacts={this.props.getContacts}
                    deleteContact={this.props.deleteContact}
                />




            </div>
        );
    }
}

export default Home;