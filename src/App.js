import React from 'react';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Forgot from './components/Forgot.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import Page from './components/Page.jsx';
import Biryani from './components/Biryani.jsx';
import Thali from './components/Thali.jsx';
import Chinese from './components/Chinese.jsx';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/Reactwork' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/forgotpassword' element={<Forgot />}/>
          <Route path='/home' element={<Dashboard />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/biryani' element={<Biryani />}/>
          <Route path='/thali' element={<Thali />}/>
          <Route path='/chinese' element={<Chinese />}/>
          <Route path='*'element={<Page />}/>
        </Routes>
      </Router>
  )
}
export default App