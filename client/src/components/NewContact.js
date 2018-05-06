import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize'


class NewContact extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            <Row>

                <Input s={3} label="First Name" onChange={this.props.handleChange}
                    value={this.props.first_name} name='first_name'
                />

                <Input s={3} label="Last Name" onChange={this.props.handleChange}
                    value={this.props.last_name} name='last_name'
                />

                <Input s={3} label="Phone" onChange={this.props.handleChange}
                    value={this.props.phone} name='phone'
                />

                <Input s={3} label="email" onChange={this.props.handleChange}
                    value={this.props.email} name='email'
                />

                <Input s={12} label="Address" onChange={this.props.handleChange}
                    value={this.props.address} name='address'
                />
                <Button waves='light' type='submit'>Submit</Button>
            </Row>
            </form>
        );
    }
}

export default NewContact;