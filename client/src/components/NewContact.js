import React, { Component } from 'react';
import {Row,Input} from 'react-materialize'


class NewContact extends Component {
    render() {
        return (
            <Row>
                <Input s={3} label="First Name" />
                <Input s={3} label="Last Name" />
                <Input s={3} label="Phone" />
                <Input s={3} label="email" />
                <Input s={12} label="Address" />
            </Row>
        );
    }
}

export default NewContact;