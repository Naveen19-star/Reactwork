import React from 'react';
import { Link } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
function Header() {
  return (
    <div className="nav">
    <ul>
      <Link to='/home'><li><HomeOutlinedIcon /> Home</li></Link>
      <Link to='/menu'><li><RestaurantMenuOutlinedIcon />Menu</li></Link>
      <Link to='/contact'><li><ContactPageOutlinedIcon /> Contact</li></Link>
      <ul className='logout'>
      <Link to='/Reactwork'className='m-5'><li><LogoutOutlinedIcon /> Logout</li></Link>
      </ul>
    </ul>
   </div>
  )
}

export default Header
