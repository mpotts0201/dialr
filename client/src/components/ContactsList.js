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
                        return (
                            <div className='contact-list'><Contact contact={contact} deleteContact={this.props.deleteContact} key={contact.id} /></div>
                        )
                    })
                    : null}
            </div>
        )
 
    }
}

export default ContactsList