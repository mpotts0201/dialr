import React, { Component } from 'react'
import { Button, Icon } from 'react-materialize'

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
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <input onChange={this.handleChange} type="password" name="password_confirmation"
                            value={this.state.password_confirmation} />
                    </div>

                    <Button onClick={this.signUp} waves='light'>Sign Up<Icon left>person_add</Icon></Button>

                    <Button onClick={this.signIn} waves='light'>Log In<Icon left>person</Icon></Button>
                    {/* <RaisedButton onClick={this.signUp} label="Sign Up" />
                    <RaisedButton onClick={this.signIn} label="Log In" /> */}
                </form>
            </div>
        )
    }
}

export default SignUpLogIn