import React from 'react';
import { Row , Col } from 'react-bootstrap';
import Header from './Header';
function Contact() {
  return (
<div className="main">
  <Row className='g-0'>
    <Col sm={2}>
    <Header/>
    </Col>
    <Col sm={10}>
    <div className="content">
        <Row className='g-0'>
          <Col sm={12}>
            <div className="contact-content">
              <h1>Contact Us</h1>
              <p>If you have any questions or need further information, feel free to reach out to us through the following contact methods:</p>
              <ul>
                <li><strong>Email:</strong> contact@yourdomain.com</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Address:</strong> 123 Your Street, Your City, Your Country</li>
              </ul>
              <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                  </div>
                  <button type="submit"className='cont'>Send</button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
</div>
  )
}

export default Contact
