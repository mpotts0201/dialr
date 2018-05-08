import React, { Component } from 'react'
import { Button, Icon, Input } from 'react-materialize'

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <h1>dialr</h1>
                <form>
                    <Input s={6} onChange={this.handleChange} label='Email' name="email" value={this.state.email} />

                    <Input s={6} onChange={this.handleChange} label='Password' name="password" value={this.state.password} />
                    
                    <Input s={6} onChange={this.handleChange} label='Confirm Password' name="password_confirmation"
                        value={this.state.password_confirmation} />

                    <Button onClick={this.signUp} waves='light'>Sign Up<Icon left>person_add</Icon></Button>

                    <Button onClick={this.signIn} waves='light'>Log In<Icon left>person</Icon></Button>

                </form>
            </div>
        )
    }
}

export default SignUpLogIn