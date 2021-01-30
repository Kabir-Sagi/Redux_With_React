import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" >Redux With React</a>
 

  <div class="collapse navbar-collapse ml-0" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto px-5">
      <li class="nav-item active px-2">
        <Link class="nav-link" to="/">HOME <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item px-2">
        <Link class="nav-link" to="/user">USER</Link>
      </li>
      <li class="nav-item px-2">
        <Link class="nav-link" to="/post">POST</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>
            </div>
        );
    }
}

export default Nav;