import React from 'react';
import { Row , Col } from 'react-bootstrap';
import Header from './Header'
function Dashboard() {
  return (
<div className='main'>
  <Row className='g-0'>
    <Col sm={2}>
      <Header/>
    </Col>
    <Col sm={10}>
      <div>
        <h1>Dashboard</h1>
      </div>
    </Col>
  </Row>
</div>
  )
}

export default Dashboard
