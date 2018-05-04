import React from 'react'

const Contact = (props) => {
    return (
        <div>
            <div><h2>{props.first_name}</h2></div>
            <div>{props.last_name}</div>
        </div>
    )
}

export default Contact