import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitle, Button, Input, Modal, Icon } from 'react-materialize'
import image from '../img/default_img.jpg'
import EditContact from './EditContact'
import styled from 'styled-components'
import axios from 'axios'

const Menu = styled.div`
display: flex;
flex-direction: column;

`




class Contact extends Component {

    state = {
        showEdit: false,
        showDelete: false,
    }

    toggleEdit = () => {
        this.setState({ showEdit: !this.state.showEdit })
        if (this.state.showDelete) {
            this.toggleDelete()
        }
    }

    toggleDelete = () => {
        this.setState({ showDelete: !this.state.showDelete })
        {
            this.state.showEdit
                ? this.toggleEdit
                : null
        }
    }

    cleanNumber = (number) => {

        let cleanNumber = number.replace(/[^\d]/g, '')

        let arr = cleanNumber.split('')

        if (arr[0] != 1) {
            arr.unshift('1')
        }

        return arr.join('')
    }

    call = async () => {
        const number = this.cleanNumber(this.props.contact.phone)

        const response = await axios.post('/api/calls', { number })
        console.log(response)
    }

    render() {
        return (
            <div className='contact'>

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
                                    <h5>{this.props.contact.contactType} Contact</h5>
                                    <p onClick={this.call}>{this.props.contact.phone}</p>
                                    <p>{this.props.contact.email}</p>
                                    <p>{this.props.contact.address}</p>
                                </div>}
                            <Menu>
                                <Button className='button' onClick={this.toggleEdit}><Icon left>edit</Icon>Edit</Button>
                                <Modal
                                    header={`Are you sure you want to delete ${this.props.contact.first_name}?`}
                                    bottomSheet
                                    trigger={<Button><Icon left>delete_forever</Icon>Delete</Button>}>
                                    <Button onClick={() => this.props.deleteContact(this.props.contact.id)}><Icon left>delete_forever</Icon>Delete</Button>
                                </Modal>
                            </Menu>

                        </div>
                    }>
                </Card>
            </div>
        )
    }
}

export default Contact