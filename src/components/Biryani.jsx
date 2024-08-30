import React, { useState } from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Header from './Header';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { productsData } from '../Data/Items'; // Importing product data
import Logo from '../Images/logo.png';

function Biryani() {
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
          <div className="header">
            <img src={Logo} alt="logo" className="img" width="90px" />
            <div className="cart-icon">
              <Button variant="outline-secondary" size="lg">
                <ShoppingCartOutlinedIcon fontSize="medium" />
                <Badge bg="secondary">{cart.length}</Badge>
              </Button>
            </div>
          </div>
          
          {/* Page Title */}
          <h1 className="page-title text-center my-4">Biryani Delight</h1>
          
          {/* Display Products */}
          <Row className="p-3">
            {productsData.map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-4 card-item">
                <Card className="h-100">
                  <Card.Img variant="top" src={product.image} alt={product.itemName} />
                  <Card.Body>
                    <Card.Title>{product.itemName}</Card.Title>
                    <Card.Text>Price: {product.Price}</Card.Text>
                    <Button 
                      className='button1'
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

export default Biryani;
