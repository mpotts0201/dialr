import React, { Component } from 'react'
import Contact from "./Contact"
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

class ContactsList extends Component {

    render() {

        return (
            <div>
                <h1>Contacts</h1>

                {this.props.contacts.length > 0
                    ? this.props.contacts.map((contact) => {
                        <h3>{contact.contactType}</h3>
                        if (contact.contactType == 'Work') {
                            return (
                                <div className='contact-list'>
                                    <h3>Work</h3>
                                    <Contact contact={contact}
                                        deleteContact={this.props.deleteContact}
                                        key={contact.id}
                                        contacts={this.props.contacts}
                                        handleChange={this.handleChange}
                                        first_name={this.props.first_name}
                                        last_name={this.props.last_name}
                                        contactType={this.props.contactType}

                                        phone={this.props.phone}
                                        email={this.props.email}
                                        address={this.props.address}
                                        getContacts={this.props.getContacts}

                                    />
                                </div>
                            )
                        } if (contact.contactType == 'Personal') {
                            return (
                                <div className='contact-list'>
                                    <h3>Personal</h3>
                                    <Contact contact={contact}
                                        deleteContact={this.props.deleteContact}
                                        key={contact.id}
                                        contacts={this.props.contacts}
                                        handleChange={this.handleChange}
                                        first_name={this.props.first_name}
                                        last_name={this.props.last_name}
                                        phone={this.props.phone}
                                        email={this.props.email}
                                        address={this.props.address}
                                        getContacts={this.props.getContacts}

                                    />
                                </div>
                            )
                        } if (contact.contactType == 'Event') {
                            return (
                                <div className='contact-list'>
                                    <h3>Event</h3>
                                    <Contact contact={contact}
                                        deleteContact={this.props.deleteContact}
                                        key={contact.id}
                                        contacts={this.props.contacts}
                                        handleChange={this.handleChange}
                                        first_name={this.props.first_name}
                                        last_name={this.props.last_name}
                                        phone={this.props.phone}
                                        email={this.props.email}
                                        address={this.props.address}
                                        getContacts={this.props.getContacts}

                                    />
                                </div>
                            )
                        }
                    })
                    : null}
            </div>
        )

    }
}

export default ContactsList