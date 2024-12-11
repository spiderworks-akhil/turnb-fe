import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = ({ MainMenu, Settings }) => {


  const router = useRouter()
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('fade-up'); // Default to fade-up

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine scroll direction
    if (currentScrollY > scrollY) {
      setScrollDirection('scrolled-down'); // Scrolling down
    } else {
      setScrollDirection('scrolled-up'); // Scrolling up
    }

    // Update the scroll position
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY])


  return (
    <nav className={`autohide navbar navbar-expand-lg navbar-light sticky-top topnav ${scrollDirection}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image width={140} height={43} src={Settings?.logo} className="img-fluid wdd-logo" alt="Logo" />
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
            {
              MainMenu?.Main_Menu?.map((obj, index) => (
                obj?.children?.length > 0 ?
                  <li key={index} className="nav-item dropdown">
                    <a style={{ cursor: 'pointer' }} className="nav-link scrollto dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      {obj?.title}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                      {
                        obj?.children?.map((child, childIndex) => (
                          <li key={childIndex}><Link style={{ color: '#fff' }} href={`${obj?.url == 'life-at-turnb' ? '' : '/' + obj?.url}/${child?.url}`} className={`dropdown-item ${router?.pathname == child?.url ? 'active' : ''} `} >{child?.title}</Link></li>
                        ))
                      }
                    </ul>
                  </li>
                  :
                  <li key={index} className="nav-item">
                    <Link href={obj?.url == 'index' ? '/' : `/${obj?.url}`} className={`nav-link scrollto ${router?.pathname == obj?.url ? 'active' : (router?.pathname == '/' && obj?.url == 'index') ? 'active' : ''} `}>{obj?.title}</Link>
                  </li>
              ))
            }

          </ul>

          {/* search */}
          {/* <div className="navbar-right">
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
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
