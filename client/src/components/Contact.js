import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitle, Button } from 'react-materialize'
import image from '../img/default_img.jpg'


class Contact extends Component {



    render() {
        return (
            <div>

                <Card className='card' header={<CardTitle reveal image={image} waves='light' />}
                    title={this.props.contact.first_name + ' ' + this.props.contact.last_name}
                    reveal={
                        <div>
                            <p>{this.props.contact.phone}</p>
                            <p>{this.props.contact.email}</p>
                            <p>{this.props.contact.address}</p>
                            <Button>Edit Contact</Button>
                        </div>
                    }>
                    <Link to=''>Edit</Link>
                </Card>
            </div>
        )
    }
}

export default Contact