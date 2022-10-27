import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import { data } from '../../data'
import { Col, Container, Row } from 'react-bootstrap'



const Projects = () => {
  return (
    <div>
      <h2 className='projects_title'>Projects</h2>
      <Container>
        <Row mt={4}>
          {
            data.map(data => (
              <Col sm={12} md={6} lg={3} xl={3} key={data.id}>
                <SingleCard data={data} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Projects
