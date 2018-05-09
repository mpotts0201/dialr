import React, { Component } from 'react';
import ContactsList from './ContactsList'
import NavBar from './NavBar'
import { Button, Icon, Card, CardTitle } from 'react-materialize'
import NewContact from './NewContact'
import axios from 'axios'
import { userIsLoggedIn, setAxiosDefaults } from '../util/SessionHeaderUtil'
import Search from './Search'
import EditContact from './EditContact'
import image from '../img/default_img.jpg'
import { Link } from 'react-router-dom'




class Home extends Component {


    state = {
        showNew: false,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        contactType: '',

    }

    // async componentWillMount(){
    //     await this.tokens()
    // }

    // tokens = () => {
    //     this.props.tokens()
    // }

    // async componentWillMount() {
    //     try {
    //       const signedIn = userIsLoggedIn()

    //       let contacts = []
    //       if (signedIn) {
    //         setAxiosDefaults()
    //         contacts = await this.getContacts()
    //       }

    //       this.setState({
    //         contacts,
    //         signedIn,
    //       })
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }

    toggleNew = () => {
        this.setState({ showNew: !this.state.showNew })
    }

    // handleChange = (event) => {
    //     const newState = { ...this.state }
    //     newState[event.target.name] = event.target.value
    //     this.setState(newState)
    // }

    // handleSubmit = async(event) => {
    //     event.preventDefault()

    //     const first_name = this.state.first_name
    //     const last_name = this.state.last_name
    //     const email = this.state.email
    //     const phone = this.state.phone
    //     const address = this.state.address

    //     const payload = {
    //         first_name,
    //         last_name,
    //         email,
    //         phone,
    //         address
    //     }

    //     // const signedIn = userIsLoggedIn()

    //     // if (signedIn) {
    //     //   setAxiosDefaults()

    //     // }
    //     const response = await axios.post('/api/contacts', payload)

    //     // const contacts = await this.getContacts()


    // }

    getContacts = () => {
        this.props.getContacts()
    }

    render() {
        return (
            <div>
                <NavBar signOut={this.props.signOut} 
                />
                <Search search={this.props.search}
                    handleChange={this.props.handleChange} />
                {this.props.showBad === true
                    ? <h3>Bad search, please try again</h3>
                    : null}

                    <br/>
                    <br/>

                <NewContact handleChange={this.props.handleChange}
                    first_name={this.props.first_name}
                    last_name={this.props.last_name}
                    phone={this.props.phone}
                    email={this.props.email}
                    address={this.props.address}
                    handleSubmit={this.props.handleSubmit}
                    contactType={this.props.contactType}

                />


                <ContactsList contacts={this.props.contacts}
                    handleChange={this.props.handleChange}
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    phone={this.state.phone}
                    email={this.state.email}
                    address={this.state.address}
                    contactType={this.state.contactType}
                    getContacts={this.props.getContacts}
                    deleteContact={this.props.deleteContact}
                />




            </div>
        );
    }
}

export default Home;