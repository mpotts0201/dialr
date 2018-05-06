import React, { Component } from 'react';
import ContactsList from './ContactsList'
import NavBar from './NavBar'
import {Button, Icon} from 'react-materialize'
import NewContact from './NewContact'


class Home extends Component {


    state = {
        showNew: false,
    }

    toggleNew = () => {
        this.setState({ showNew: !this.state.showNew })
    }

    render() {
        return (
            <div>
                <NavBar/>
                <ContactsList contacts={this.props.contacts}/>
                <Button onClick={this.toggleNew} waves='light'>New Contact</Button>
                { this.state.showNew
                ? <NewContact />
                :null}
                <Button onClick={this.props.signOut} waves='light'>Sign Out<Icon left>exit_to_app</Icon></Button>


            </div>
        );
    }
}

export default Home;