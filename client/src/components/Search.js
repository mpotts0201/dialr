import React, { Component } from 'react';
import {Input, Button} from 'react-materialize'


class Search extends Component {

    state = {
        search: null
    }

    search = () => {
        this.props.search()
    }


    handleChange = (event) => {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }


    render() {
        return (
            <form onSubmit={this.search}>
                <Input value={this.state.search} label='Search for a contact by name' onChange={this.props.handleChange} name='search'/>
                <Button type='submit'>Search</Button>
            </form>
        );
    }
}

export default Search;