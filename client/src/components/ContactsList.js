import React from 'react'
import Contact from "./Contact"

const ContactsList = (props) => {

    const contacts = props.contacts.map((contact) => {
        return (
            <Contact {...contact} deleteContact={props.deleteContact} key={contact.id}/>
        )
    })
    return (
        <div>
            <h1>Contacts</h1>

            {props.contacts.length > 0 ? contacts : null}
        </div>
    )
}

export default ContactsList