import React, { Component } from 'react';
import { Row, Input, Button, Modal, Icon } from 'react-materialize'


class NewContact extends Component {
    render() {
        return (
            <Modal
                header='New Contact'

                trigger={<Button><Icon left>add_circle</Icon>New Contact</Button>}>
                <form onSubmit={this.props.handleSubmit} className='contact'>
                    <Row>
                        <div className='newInputs'>

                            <Input className='input' label="First Name" onChange={this.props.handleChange}
                                value={this.props.first_name} name='first_name'
                            />

                            <Input className='input' label="Last Name" onChange={this.props.handleChange}
                                value={this.props.last_name} name='last_name'
                            />

                            <Input className='input' label="Phone" onChange={this.props.handleChange}
                                value={this.props.phone} name='phone'
                            />

                            <Input className='input' label="email" onChange={this.props.handleChange}
                                value={this.props.email} name='email'
                            />
                        </div>
                        <Input s={12} label="Address" onChange={this.props.handleChange}
                            value={this.props.address} name='address'
                        />


                        <Button className='button' waves='light' type='submit'>Submit</Button>
                    </Row>

                </form>
            </Modal>
        );
    }
}

export default NewContact;