import React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardTitle} from 'react-materialize'
import image from '../img/default_img.jpg'


const Contact = (props) => {
    return (
        <div>
            {/* <Link to={`/contacts/${props.id}`}><h2>{props.first_name} {props.last_name}</h2></Link> */}

            <Card className='card' header={<CardTitle reveal image={image} waves='light' />}
                title={props.first_name + ' ' + props.last_name}
                reveal={
                    <div>
                        <p>{props.phone}</p>
                        <p>{props.email}</p>
                        <p>{props.address}</p>
                    </div>
                }>
                <Link to=''>Edit</Link>
            </Card>
        </div>
    )
}

export default Contact