import React, { Component } from 'react';
import { Dropdown, Button, NavItem } from 'react-materialize'


class Type extends Component {
    render() {
        return (
            <Dropdown trigger={
                <Button>Sort by Type</Button>
            }>
                <NavItem onClick={this.props.getContacts}>All</NavItem>
                <NavItem onClick={() => this.props.selectType('Work')}>Work</NavItem>
                <NavItem onClick={() => this.props.selectType('Personal')} >Personal</NavItem>
                <NavItem onClick={() => this.props.selectType('Event')} >Event</NavItem>
            </Dropdown>
        );
    }
}

export default Type;