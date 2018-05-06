import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import './App.css'
import ContactsList from './components/ContactsList'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from './util/SessionHeaderUtil'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowContact from './components/ShowContact'

class App extends Component {

  state = {
    signedIn: false,
    contacts: []
  }

  signOut = async (event) => {
    try {
      event.preventDefault()

      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }

  getContacts = async () => {
    try {
        const response = await axios.get('/api/contacts')
        this.setState({contacts: response.data})
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()

      let contacts = []
      if (signedIn) {
        setAxiosDefaults()
        contacts = await this.getContacts()
      }

      this.setState({
        contacts,
        signedIn,
      })
    } catch (error) {
      console.log(error)
    }
  }

  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)

      this.setState({ signedIn: true })

    } catch (error) {
      console.log(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)

      const contacts = await this.getContacts()

      this.setState({
        signedIn: true,
        contacts
      })

    } catch (error) {
      console.log(error)
    }
  }

  render() {

    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn} />
    )
    const ContactsComponent = (props) => {
      return <ContactsList {...props}/>
    }

    const HomeComponent = (props) => {
      return <Home {...props} signOut={this.signOut} 
      contacts={this.state.contacts}
      getContacts={this.getContacts}
      />
    }



    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/contacts" render={ContactsComponent} />
            <Route exact path='/' render={HomeComponent}/>
            <Route exact path='/contacts/:id' component={ShowContact} />
          </Switch>

          {this.state.signedIn ? <Redirect to='/' /> : <Redirect to="/signUp" />}
        </div>
      </Router>
    )
  }
}

export default App

