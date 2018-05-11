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
    contacts: [],
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    contactType: '',
    contact: {},
    search: '',
    showBad: false,
  }

  setType = (type) => {
    this.setState({contactType: type})
  }

  selectType = async(type) => {
    await this.getContacts()
    const contacts = []
    this.state.contacts.map((contact, i) => {
      contact.contactType == type
      ? contacts.push(contact)
      : null
    })
    this.setState({contacts: contacts})
    console.log(contacts)
  }


  search = async () => {
    
    const searchName = this.state.search.toLowerCase()

    const contacts = [...this.state.contacts]

    this.state.contacts.map((contact, i) => {
      const firstName = contact.first_name.toLowerCase()
      const lastName = contact.last_name.toLowerCase()

      if (firstName == searchName || lastName == searchName
        || searchName == firstName + ' ' + lastName
        || searchName == firstName + lastName) {
        console.log(contact)
        contacts.splice(i, 1)
        contacts.unshift(contact)

        this.setState({
          contacts: contacts,
          showBad: false,
        })

        console.log(this.state.showBad)
      }
      else {
        this.setState({showBad: true})
      }
    })
  }



  deleteContact = async (id) => {
    const response = await axios.delete(`/api/contacts/${id}`)
    await this.getContacts()
  }





  handleSubmit = async (event) => {
    event.preventDefault()

    const first_name = this.state.first_name
    const last_name = this.state.last_name
    const email = this.state.email
    const phone = this.state.phone
    const address = this.state.address
    const contactType = this.state.contactType

    const payload = {
      first_name,
      last_name,
      email,
      phone,
      address,
      contactType,
    }

    const signedIn = userIsLoggedIn()

    if (signedIn) {
      setAxiosDefaults()

    }
    const response = await axios.post('/api/contacts', payload)


    await this.tokens()


  }
  handleChange = (event) => {
    const newState = { ...this.state }
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  signOut = async (event) => {
    await this.tokens()
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

      this.setState({ contacts: response.data })

      return response.data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async componentWillMount() {
    await this.tokens()
  }

  async componentDidMount() {
    await this.tokens()
  }

  tokens = async () => {
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


    const HomeComponent = (props) => {
      return <Home {...props} signOut={this.signOut}
        contacts={this.state.contacts}
        getContacts={this.getContacts}
        tokens={this.tokens}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        phone={this.state.phone}
        email={this.state.email}
        address={this.state.address}
        contactType={this.state.contactType}
        search={this.search}
        contact={this.state.contact}
        deleteContact={this.deleteContact}
        toggleBadsearch={this.toggleBadsearch}
        showBad={this.state.showBad}
        selectType={this.selectType}
        setType={this.setType}
      />
    }



    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path='/' render={HomeComponent} />
          </Switch>

          {this.state.signedIn ? <Redirect to='/' /> : <Redirect to="/signUp" />}
        </div>
      </Router>
    )
  }
}

export default App

