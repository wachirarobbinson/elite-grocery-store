import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Contact from './Contact';

const Header = () => {
  return (
    <div>
      <nav className="head bg-green-500 text-white flex justify-between items-center p-4">
        <h1 className="text-4xl">Elite Store</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="active font-bold hover:line-through">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:line-through">
              <i className="fa fa-clone" aria-hidden="true"></i> Services
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:line-through">
              <i className="fa fa-user" aria-hidden="true"></i> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:line-through">
              <i className="fa fa-phone" aria-hidden="true"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Header;
