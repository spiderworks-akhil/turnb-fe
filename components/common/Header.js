import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="autohide navbar navbar-expand-lg navbar-light sticky-top topnav">
      <div className="container">
        <Link href="#" className="navbar-brand">
          <img src="/img/logo-home.png" className="img-fluid wdd-logo" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/about" className="nav-link scrollto active">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link scrollto">Our Services</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link scrollto dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Industries
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><Link href="/retail-industries" className="dropdown-item active">Retail</Link></li>
                <li><Link href="/technology-industries" className="dropdown-item">Technology</Link></li>
                <li><Link href="/elarning-industries" className="dropdown-item">E-Learning</Link></li>
                <li><Link href="/realestate-industries" className="dropdown-item">Real Estate</Link></li>
                <li><Link href="/ecommerce-industries" className="dropdown-item">E-Commerce</Link></li>
                <li><Link href="/trading-%26-distribution" className="dropdown-item">Trading and Distribution</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/consult" className="nav-link scrollto">Consult D5<sup>TM</sup></Link>
            </li>
            <li className="nav-item">
              <Link href="/scanb" className="nav-link scrollto">ScanB</Link>
            </li>
            <li className="nav-item">
              <Link href="/case-studies" className="nav-link scrollto">Case Studies</Link>
            </li>
            <li className="nav-item">
              <Link href="/life-at-turnb" className="nav-link scrollto">Life@TurnB</Link>
            </li>
            <li className="nav-item">
              <Link href="/career" className="nav-link scrollto">Careers</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us" className="nav-link scrollto">Contact Us</Link>
            </li>
          </ul>
          <div className="navbar-right">
            <form className="search-form searchbar" role="search" id="hiddenSearchBox" action="" method="POST">
              <div className="input-group">
                <input type="text" name="keywords" className="form-control" placeholder="Search.." />
                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <span className="sr-only">Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
