import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardImg } from 'react-bootstrap';

import './style.css'

const SingleCard = (props) => {

  return (
    <div>
    <Card className='card'>
      <Card.Title className='card-title'>{props.data.title}</Card.Title>
      <Card.Link href={props.data.link}>link</Card.Link>
      <CardImg src={props.data.image}/>
    </Card>

    </div>
  )
}

export default SingleCard
