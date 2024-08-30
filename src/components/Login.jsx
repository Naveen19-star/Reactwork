import React from 'react';
import {Container,Row ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  return (
<div className="background">
  <Container>
    <Row>
      <Col sm={6}>
      <div>
        <h3>Welcome to Mr.Chef - Where Every Bite is a Delight</h3>
      </div>
      </Col>
      <Col sm={6}>
        <div className='login'> 
          <h1 className="h1">Welcome</h1>
          <label>Username</label>
          <input type="text"placeholder='Enter Your Username'/>
          <label>Password</label>
          <input type="text"placeholder='Enter Your Password'/>
          <Link to ='/forgotpassword'><p className='forgot'>Forgot Password?</p></Link>
          <Link to='/home'><button className="button">Login</button></Link>
          <p className='sign'>New User ?<Link to='/Signup'> Signup</Link></p>
        </div>
      </Col>
    </Row>
  </Container>
</div>
  )
}

export default Login
