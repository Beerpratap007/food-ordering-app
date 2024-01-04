import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assests/images/food-order-logo.jpg';
import useOnlineStatus from '../utils/useOnlineStatus';

function Header() {
  const [loginBtn, setLoginBtn] = useState('Login');

  const OnlineStatus = useOnlineStatus();
  return (
    <div className='header-container'>
      <div className='logo-sec'>
        <a href='#'><img src={Logo} alt='Food Order Logo' /></a>
      </div>
      <div className='menu-sec'>
        <ul className='menu'>
          <li>Online Status {OnlineStatus ? '🟢' : '🔴'}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link>Cart</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <button onClick={() => setLoginBtn(loginBtn === 'Login' ? 'Logout' : 'Login')}>{loginBtn}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header