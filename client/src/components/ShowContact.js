import React, { Component } from 'react';
import NavBar from './NavBar'
import axios from 'axios'


class ShowContact extends Component {

    state = {
        contact: {}
    }

    async componentDidMount(){
        await this.getContact()
    }

    getContact = async() => {
        const response = await axios.get(`/api/contacts/${this.props.match.params.id}`)

        this.setState({contact: response.data})
    }



    render() {
        return (
            <div>
                <NavBar/>
                <h1>{this.state.contact.first_name} {this.state.contact.last_name}</h1>
                
            </div>
        );
    }
}

export default ShowContact;