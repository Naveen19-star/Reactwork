import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Signup() {
  return (
<Container>
    <div className='signup'>
      <h1 className='head'>New Account</h1>
      <input type='text'placeholder='Enter Your Username'/>
      <input type='email'placeholder='Enter Your email'/>
      <input type="password"placeholder='Enter your Password'/>
      <input type="password"placeholder='Confirm your Password'/>
      <Link to='/'><button className="in">Sign In</button></Link>
    </div>
</Container>
  )
}

export default Signup