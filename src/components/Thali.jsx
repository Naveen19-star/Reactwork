import React, { useState } from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Header from './Header';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { thaliData } from '../Data/Items';
import { Link } from 'react-router-dom';
import Rice from '../Images/biryani.png';
import Chinese from '../Images/chinese.png';
import thali from '../Images/Thali.png';
import Pizza from '../Images/pizza.png';
import Ice from '../Images/ice.png';
import Logo from '../Images/logo.png';
function Thali() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="main">
      <Row className='g-0'>
        <Col sm={2}>
          <Header />
        </Col>
        <Col sm={10}>
          <div className="header d-flex justify-content-between align-items-center p-3">
            <div className="logo-container d-flex align-items-center">
              <img src={Logo} alt="logo" className="img" width="90px" />
              <h2 className="ms-3">Mr.Chef</h2>
            </div>
            <div className="cart-icon">
              <Button variant="outline-secondary" size="lg" className="cart-btn">
                <ShoppingCartOutlinedIcon fontSize="medium" />
                <Badge bg="secondary">{cart.length}</Badge>
              </Button>
            </div>
          </div>
          <div className="menu">
      <div>
        <Link to='/biryani'><img src={Rice} alt='Biryani' className='img'/>
        <p>Biryani</p></Link>
      </div>
      <div>
      <Link to='/thali'><img src={thali} alt='Thali' className='img'/>
        <p>Thali</p></Link>
      </div>
      <div>
      <Link to='/chinese'><img src={Chinese} alt='Chinese' className='img'/>
        <p>Chinese</p></Link> 
      </div>
      <div>
      <Link to='/pizza'><img src={Pizza} alt='Pizza' className='img'/>
        <p>Pizza</p></Link>
      </div>
      <div>
      <Link to='/icecream'><img src={Ice} alt='Ice Cream' className='img'/>
        <p>Ice Cream</p></Link>
      </div>
    </div>          
          {/* Page Title */}
          <h1 className="page-title text-center my-4">Thali Platter</h1>
          
          {/* Display Products */}
          <Row className="p-3">
            {thaliData.map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-4 card-item">
                <Card className="h-100 product-card">
                  <Card.Img variant="top" src={product.image} alt={product.itemName} />
                  <Card.Body>
                    <Card.Title className="product-title">{product.itemName}</Card.Title>
                    <Card.Text className="product-price">Price: {product.Price}</Card.Text>
                    <Button 
                      className='button1 add-to-cart-btn'
                      variant="warning"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCartOutlinedIcon /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Thali;