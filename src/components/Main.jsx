import React, { Component } from 'react';
import { Link } from 'react-router'

class Main extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" activeClassName="active"><a className="navbar-brand">NRDLife</a></Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/portfolio" activeClassName="active">Portfolio</Link></li>
                <li><Link to="/Blog" activeClassName="active">Blog</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main
