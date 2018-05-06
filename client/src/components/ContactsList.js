import React from 'react'
import Contact from "./Contact"
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const ContactsList = (props) => {

    const contacts = props.contacts.map((contact) => {
        return (
            <div className='contact-list'><Contact {...contact} deleteContact={props.deleteContact} key={contact.id}/></div>
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