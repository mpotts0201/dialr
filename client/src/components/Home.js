import React, { Component } from 'react';
import ContactsList from './ContactsList'
import NavBar from './NavBar'
import {Button, Icon} from 'react-materialize'
import NewContact from './NewContact'
import axios from 'axios'

class Home extends Component {


    state = {
        showNew: false,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',

    }

    toggleNew = () => {
        this.setState({ showNew: !this.state.showNew })
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async(event) => {
        event.preventDefault()

        const first_name = this.state.first_name
        const last_name = this.state.last_name
        const email = this.state.email
        const phone = this.state.phone
        const address = this.state.address

        const payload = {
            first_name,
            last_name,
            email,
            phone,
            address
        }

        const response = await axios.post('/api/contacts', payload)
        const contacts = await this.getContacts()
        
    }

    getContacts = () => {
        this.props.getContacts()
    }

    render() {
        return (
            <div>
                <NavBar/>
                <ContactsList contacts={this.props.contacts}/>
                <Button onClick={this.toggleNew} waves='light'>New Contact</Button>
                { this.state.showNew
                ? <NewContact handleChange={this.handleChange}
                first_name={this.state.first_name}
                last_name={this.state.last_name}
                phone={this.state.phone}
                email={this.state.email}
                address={this.state.address}
                handleSubmit={this.handleSubmit}
                />
                :null}
                <Button onClick={this.props.signOut} waves='light'>Sign Out<Icon left>exit_to_app</Icon></Button>


            </div>
        );
    }
}

export default Home;