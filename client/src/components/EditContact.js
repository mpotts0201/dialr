import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize'
import axios from 'axios'

class EditContact extends Component {


    state = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        contactType: '',
        
    }

    componentDidMount(){
        this.setState({
            first_name: this.props.contact.first_name,
            last_name: this.props.contact.last_name,
            email: this.props.contact.email,
            phone: this.props.contact.phone,
            address: this.props.contact.address,
            contactType: this.props.contact.contactType,
        })
    }

    handleEdit = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    editSubmit = async(event) => {
        event.preventDefault()

        const first_name = this.state.first_name
        const last_name = this.state.last_name
        const email = this.state.email
        const phone = this.state.phone
        const address = this.state.address
        const contactType = this.state.contactType


        const payload = {
            first_name,
            last_name,
            email,
            phone,
            address,
            contactType
        }

        const response = await axios.patch(`/api/contacts/${this.props.contact.id}`, payload)
        await this.getContacts()
        this.toggleEdit()
    }

    getContacts = () => {
        this.props.getContacts()
    }

    toggleEdit = () => {
        this.props.toggleEdit()
    }

    render() {
        return (
            <form onSubmit={this.editSubmit}>
            <Row>

                <Input s={6} label="First Name" onChange={this.handleEdit}
                    value={this.state.first_name} name='first_name'
                    placeholder={this.props.contact.first_name}
                />

                <Input s={6} label="Last Name" onChange={this.handleEdit}
                    value={this.state.last_name} name='last_name'
                    placeholder={this.props.contact.last_name}
                />

                <Input s={6} label="Phone" onChange={this.handleEdit}
                    value={this.state.phone} name='phone'
                    placeholder={this.props.contact.phone}
                />

                <Input s={6} label="email" onChange={this.handleEdit}
                    value={this.state.email} name='email'
                    placeholder={this.props.contact.email}
                />

                <Input s={12} label="Address" onChange={this.handleEdit}
                    value={this.state.address} name='address'
                    placeholder={this.props.contact.address}
                />
                <Button type='submit'>Submit Edit</Button>
            </Row>
            
            </form>
        );
    }
}

export default EditContact;