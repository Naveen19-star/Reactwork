import React from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
const foodItems = [
  {
    id: 1,
    name: 'Biryani',
    description: 'Aromatic rice dish with spices and marinated meat',
    imageUrl: 'https://media.istockphoto.com/id/501137061/photo/chicken-biryani-1-4.jpg?s=612x612&w=0&k=20&c=4YH3uPuv2iNyNTemn5bTxCyst608o3WDZNyATnibDsg=',
  },
  {
    id: 2,
    name: 'Thali',
    description: 'A platter with various dishes served with rice and bread',
    imageUrl: 'https://img.freepik.com/free-photo/gourmet-bowl-with-healthy-rice-meat-vegetables-generated-by-ai_188544-14076.jpg',
  },
  {
    id: 3,
    name: 'Chinese',
    description: 'Delicious stir-fried noodles or rice with vegetables and meat',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/023/580/730/small_2x/chow-mein-fried-noodles-with-chicken-and-vegetables-generative-ai-photo.jpg',
  },
  {
    id: 4,
    name: 'Pizza',
    description: 'Delicious cheese pizza with fresh toppings',
    imageUrl: 'https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg',
  },
  {
    id: 5,
    name: 'Ice Cream',
    description: 'Creamy ice cream in various flavors',
    imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-3d-rendering-of-delicious-ice-cream-image_3767223.jpg',
  },
];

function Dashboard() {
  return (
    <div className="main">
      <Row className="g-0">
        <Col sm={2}>
          <Header />
        </Col>
        <Col sm={10}>
          <Container className="dashboard-content">
            <h1>Welcome to Our Mr Chef Site</h1>
            <h5>Explore our delicious food items!</h5>
            <Row className="justify-content-center">
              {foodItems.map((item) => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-5 mx-5 d-flex">
                  <Card className="food-card flex-fill">
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
              <Link to="/menu"><Button variant="primary" size="lg" className="explore-button">Explore More</Button></Link>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
