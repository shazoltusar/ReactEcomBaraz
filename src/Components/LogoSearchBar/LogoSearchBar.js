import React, { Component } from 'react'
import  '../Navbar/Navbar.css';
import logo from '../../images/logo.png';


export default class LogoSearchBar extends Component {
  render() {
    return (
      <div className='search_container container-fluid pt-2 d-flex justify-content-center align-item-center'>
        <a href='/'><img className='img-fluid' width='50%' src={logo} alt='Braz Logo'/></a>
        <input type='text' className='search_bar ' placeholder='Search in Baraz'/>
        <button className='btn btn-success'>Search</button>
      </div>
    )
  }
}
