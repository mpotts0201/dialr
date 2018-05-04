import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import ContactsList from './components/ContactsList'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from './util/SessionHeaderUtil'



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
    const ContactsComponent = () => (
      <ContactsList
        contacts={this.state.contacts} />
    )

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/contacts" render={ContactsComponent} />

          </Switch>

          {this.state.signedIn ? <Redirect to='/contacts' /> : <Redirect to="/signUp" />}
          <button onClick={this.signOut}>Sign Out</button>

        </div>
      </Router>
    )
  }
}

export default App

