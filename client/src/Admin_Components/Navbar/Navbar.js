

import React, { Component, useState } from 'react';
import { MenuItemsManager,MenuItemsAdmin,MenuItems, LoggedIn, LoggedOut } from './MenuItems';
import './Navbar.css'
import { Button } from './Button';
import { checkManager,checkAdmin,checkToken, setUserIDSession, getUser, removeUserSession, removeUserIDSession, getToken } from "../../Utils/Common";
import axios from 'axios';
import Notification from '../Notifications';


class Navbar extends Component {

  state = { clicked: false }
  token = checkToken()
  admin = checkAdmin();
  manager = checkManager();
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {

    
    const user = getUser();
    const token = getToken();
    

    const handleLogout = async () => {
  
      let config = {
        headers: {
          Authorization: "basic " + token
        }
      }

      await axios.delete("http://localhost:4000/users/logout", config, {
      }).then(response => {
        removeUserSession();
        removeUserIDSession();
      }).catch(error => {        
        console.log("errors >>> ", error)
      })
      window.location.assign('/login');
    }


    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Library{/*<i className="fab fa-react"></i>*/}</h1>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {
          
          this.admin ? 
          
          MenuItemsAdmin.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName}  href={item.url} >
                  {item.title}
                </a>
              </li>
            )}
          ) : 
          this.manager ? 
          MenuItemsManager.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName}  href={item.url} >
                  {item.title}
                </a>
              </li>
            )}
          ):
          MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName}  href={item.url} >
                  {item.title}
                </a>
              </li>
            )}
           )
      
          }
          </ul>
        <ul className='nav-menu-right'>
          {
            this.token ? ( this.admin ?
              <Button onClick={() => window.location.assign('/admin/home')}>Home</Button> :
              this.manager ?  <nbsp></nbsp> : 
              <Button onClick={() => window.location.assign('/dashboard')}>My Profile</Button>
            )
              : (
                <Button onClick={() => window.location.assign('/login')}>Login</Button>
              )
          }
          {
            this.token ? (
              <Button onClick={handleLogout}>Logout</Button>
            )
              : (
                <Button onClick={() => window.location.assign('/register')}>Register</Button>
              )
          }


        </ul>
      </nav>

    )
  }
}

export default Navbar;