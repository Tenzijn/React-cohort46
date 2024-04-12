import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ pageName }: string) {
  return (
    <>
      <div className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link
              to='/'
              className={`navbar-link ${
                pageName === 'products' ? 'active' : ''
              }`}
            >
              Products
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              to='/favorites'
              className={`navbar-link ${
                pageName === 'favorites' ? 'active' : ''
              }`}
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
