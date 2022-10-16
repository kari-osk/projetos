import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroImage from '../../assets/bg_1.png'
import './style.css'

const Hero = () => {
  return (
    <Container>
      <div className='hero'>

        <Row>
          <Col>
            <img src={heroImage} alt='Imagem de um computador com a frase Hello World' />
          </Col>
          <Col className='hero-text'>
            <h2>Olá meu nome é Karina</h2>
            <h1>Desenvolvedora Front-end com background em design</h1>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Hero
