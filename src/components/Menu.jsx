import React from 'react';
import { Row, Col , Button } from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Biryani from '../Images/biryani.png';
import Chinese from '../Images/chinese.png';
import Thali from '../Images/Thali.png';
import Pizza from '../Images/pizza.png';
import Ice from '../Images/ice.png';
import Logo from '../Images/logo.png';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'; // Use StarOutlinedIcon for empty stars
import StarIcon from '@mui/icons-material/Star';
import Header from './Header';
import { Link } from 'react-router-dom';
function Menu() {
  const rating = 4;
  return (
<div className="main">
  <Row className='g-0'>
    <Col sm={2}>
    <Header/>
    </Col>
    <Col sm={10}>
    <div className="header d-flex justify-content-between align-items-center p-3 m-3">
            <div className="logo-container d-flex align-items-center">
              <img src={Logo} alt="logo" className="img" width="90px" />
              <h2 className="ms-3">MR.Chef</h2>
            </div>
            <div className="cart-icon">
              <Button variant="outline-secondary" size="lg" className="cart-btn">
                <ShoppingCartOutlinedIcon fontSize="medium" />
              </Button>
            </div>
          </div>
    <div className="menu">
      <div>
        <Link to='/biryani'><img src={Biryani} alt='Biryani' className='img'/>
        <p>Biryani</p></Link>
      </div>
      <div>
      <Link to='/thali'><img src={Thali} alt='Thali' className='img'/>
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
 
    <div className="items">
        <h1 className="title">Top Pick's</h1>
        <div className="box-container">
          <div className="card box">
            <img 
              src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" 
              alt="Chicken Dum Biryani" 
              className="card-image"
            />
            <p>Chicken Dum Biryani</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://b.zmtcdn.com/data/pictures/chains/7/19202577/649d8234db52accedb7d878cd5c3a3c2.jpg" 
              alt="Chicken Donne Biryani" 
              className="card-image"
            />
            <p>Chicken Donne Biryani</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://static.wixstatic.com/media/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg/v1/fill/w_864,h_576,al_c,lg_1,q_85/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg" 
              alt="Chicken Tikka Biryani" 
              className="card-image"
            />
            <p>Chicken Tikka Biryani</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://thumbs.dreamstime.com/b/closeup-chicken-biryani-family-pack-boneless-closeup-chicken-biryani-family-pack-boneless-254784764.jpg" 
              alt="Chicken Boneless Biryani" 
              className="card-image"
            />
            <p>Chicken Boneless Biryani</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://yellowchilis.com/wp-content/uploads/2020/10/mughlai-chicken-biryani.jpg" 
              alt="Chicken Mughlai Biryani" 
              className="card-image"
            />
            <p>Chicken Mughlai Biryani</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://img.freepik.com/premium-photo/delicious-chicken-lollipop-biryani-biryani-picture-photography_1020697-116784.jpg" 
              alt="Chicken Lollipop Biryani" 
              className="card-image"
            />
            <p>Chicken Lollipop Biryani</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/027/487/022/non_2x/nasi-goreng-a-delicious-indonesian-food-free-photo.jpg" 
              alt="Chicken Fried Rice" 
              className="card-image"
            />
            <p>Chicken Fried Rice</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://www.veganricha.com/wp-content/uploads/2023/09/Schezwan-Rice-0955.jpg" 
              alt="Shezwan Fried Rice" 
              className="card-image"
            />
            <p>Shezwan Fried Rice</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://media.istockphoto.com/id/1208083887/photo/freshly-prepared-veg-manchurian-with-a-bowl-of-fried-rice.jpg?s=612x612&w=0&k=20&c=nTtgKk-SSQAh1E0Pz8SnpGjqMRSIIXM6XiDHIsd5LDQ=" 
              alt="Veg Manchurian" 
              className="card-image"
            />
            <p>Veg Manchurian</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://png.pngtree.com/background/20230611/original/pngtree-chinese-noodles-with-chicken-stir-fried-noodles-picture-image_3172382.jpg" 
              alt="Chicken Chowmein" 
              className="card-image"
            />
            <p>Chicken Chowmein</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=" 
              alt="Chicken pizza" 
              className="card-image"
            />
            <p>Chicken Pizza</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://media.istockphoto.com/id/186295807/photo/chicken-tikka-pizza.jpg?s=612x612&w=0&k=20&c=gnF-DKlj1JCCAhzQ4fB8WEyJ_cUlgl1i-ZNsIuvZ54U=" 
              alt="Chicken Tikka pizza" 
              className="card-image"
            />
            <p>Chicken Tikka Pizza</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://www.highonchicken.com/wp-content/uploads/2023/07/Untitled-design-3.png" 
              alt="pizza" 
              className="card-image"
            />
            <p>Japanese Chicken Pizza</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://img.freepik.com/free-photo/delicious-food-table_23-2150857814.jpg" 
              alt="Thali" 
              className="card-image"
            />
            <p>Indian Veg Thali</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://t3.ftcdn.net/jpg/01/25/95/58/360_F_125955869_qRmUszpJTLfY4mDA9B245qk6W58nnrsT.jpg" 
              alt="Thali" 
              className="card-image"
            />
            <p>Gujarati Thali</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://t3.ftcdn.net/jpg/05/87/24/94/360_F_587249409_nFLxILMTEvoCg9D4kFII8UBiZtoB0iZE.jpg" 
              alt="Thali" 
              className="card-image"
            />
            <p>Bengali Thali</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://b.zmtcdn.com/data/pictures/chains/9/18432199/e932d01324ab255aa6844b9b979bc52c.jpg?fit=around|750:500&crop=750:500;*,*" 
              alt="Ice Cream" 
              className="card-image"
            />
            <p>Vadilal Ice Cream</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <div className="card box">
            <img 
              src="https://b.zmtcdn.com/data/pictures/7/19622977/3bceeb2ce3e2369576ec799457145078.jpg?fit=around|960:500&crop=960:500;*,*" 
              alt="Ice Cream" 
              className="card-image"
            />
            <p>Arun Ice Cream</p>
            <div className="card-rating">
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} className="star-icon" /> :
                  <StarOutlinedIcon key={index} className="star-icon" />
              ))}
            </div>
          </div>
          {/* Add more card elements as needed */}
        </div>
      </div>
   </Col>
  </Row>
</div>
  )
}

export default Menu
