import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitle, Button, Input } from 'react-materialize'
import image from '../img/default_img.jpg'
import EditContact from './EditContact'

class Contact extends Component {

    state = {
        showEdit: false
    }

    toggleEdit = () => {
        this.setState({ showEdit: !this.state.showEdit })
    }

    render() {
        return (
            <div>

                <Card className='card' header={<CardTitle reveal image={image} waves='light' />}
                    title={this.props.contact.first_name + ' ' + this.props.contact.last_name}
                    reveal={
                        <div>

                            {this.state.showEdit
                                ? <EditContact contact={this.props.contact}
                                    contacts={this.props.contacts}
                                    handleChange={this.handleChange}
                                    first_name={this.props.first_name}
                                    last_name={this.props.last_name}
                                    phone={this.props.phone}
                                    email={this.props.email}
                                    address={this.props.address}
                                    getContacts={this.props.getContacts}
                                    toggleEdit={this.toggleEdit}
                                />
                                : <div>
                                    <p>{this.props.contact.phone}</p>
                                    <p>{this.props.contact.email}</p>
                                    <p>{this.props.contact.address}</p>
                                </div>}
                            <Button onClick={this.toggleEdit}>Edit Contact</Button>

                        </div>
                    }>
                    <Link to=''>Edit</Link>
                </Card>
            </div>
        )
    }
}

export default Contact