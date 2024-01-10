import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assests/images/food-order-logo.jpg';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

function Header() {
  const [loginBtn, setLoginBtn] = useState('Login');
  //Custome hook useOnlineStatus
  const OnlineStatus = useOnlineStatus();
  const { logedInUser } = useContext(UserContext);

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className='header-container flex justify-between items-center px-6 bg-blue-300 shadow-[0_5px_10px_-5px_rgba(0,0,0,0.3)] overflow-auto max-h-[120]'>
      <div className='logo-sec'>
        <a className='' href='#'><img className='max-w-[120] -mt-6' src={Logo} alt='Food Order Logo' /></a>
      </div>
      <div className='menu-sec'>
        <ul className='menu flex font-bold'>
          <li className='px-4'>Online Status {OnlineStatus ? '🟢' : '🔴'}</li>
          <li className='px-4'><Link to='/'>Home</Link></li>
          <li className='px-4'><Link to='/about'>About Us</Link></li>
          <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
          <li className='px-4'><Link to='/cart'>Cart- {cartItems.length} item</Link></li>
          <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
          <button onClick={() => setLoginBtn(loginBtn === 'Login' ? 'Logout' : 'Login')}>{loginBtn}</button>
          <li className='px-4 font-extrabold'>{logedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header