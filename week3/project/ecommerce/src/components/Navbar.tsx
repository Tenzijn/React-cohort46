import { useEffect } from 'react';
import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll('.navbar-link');
    links.forEach((link) => {
      if (link.getAttribute('href') === pathname) {
        link.classList.add('active');
      }
    });
  }, [pathname]);

  return (
    <>
      <div className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link to='/' className='navbar-link'>
              Products
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/favorites' className='navbar-link'>
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
