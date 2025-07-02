import { Header } from '../Header'
import { useState } from 'react'
import '../.././Style/Login.css'
import Logo1 from '../../assets/SquareProductImg/logo1.png';
import mobile from '../.././api/Mobile/Mobile.json'
import MobileAccessories from '../.././api/Mobile/MobileAccessories.json'
import Laptop from '../.././api/Mobile/Laptop.json'
import Alls from '../.././api/Mobile/Alls.json'
import Featured from '../.././api/Mobile/Featured.json'
import Footer from '../Footer';


const Login = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return (
    <div onMouseLeave={handleMouseLeave}>
      <Header bgColor="#2874F0" Logo={Logo1} loginColor="white"/>
      <ul className='login_menu'>
        <li className="dropdown"><a href="#" onMouseEnter={() => handleMouseEnter('mobile')}>Electronics<img src="icons/down_arrow.svg" alt="" /></a></li>
        <li><a href="#">TVs & Appliances<img src="icons/down_arrow.svg" alt="" /></a></li>
        <li><a href="#">Men<img src="icons/down_arrow.svg" alt="" /></a></li>
        <li><a href="#">Women<img src="icons/down_arrow.svg" alt="" /></a></li>
        <li><a href="#">Baby & Kids<img src="icons/down_arrow.svg" alt="" /></a></li>
        <li><a href="#">Home & Furniture<img src="icons/down_arrow.svg" alt="" /></a></li>
        <li><a href="#">Sports , Book & More<img src="icons/down_arrow.svg" alt="" /></a></li>
        <li><a href="#">Flights</a></li>
        <li><a href="#">Offer Zone</a></li>
      </ul>

      {activeDropdown === 'mobile' && (
        <div className="dropdown-menus mobile-dropdown" onMouseEnter={() => handleMouseEnter('mobile')} onMouseLeave={handleMouseLeave}>
          {/* <b>Mobile Brands</b> */}
          {/* <hr /> */}
          <div className='Mobiles'>
            <div>
              {mobile.map((item) => (
                <p key={item.id}>
                  <b><a href="#">{item.LoginTitle}</a></b>
                  <a href="#">{item.name}</a>
                </p>
              ))}
            </div>
            <div>
              {MobileAccessories.map((item) => (
                <p key={item.id}>
                  <b><a href="#">{item.LoginTitle}</a></b>
                  <a href="#">{item.name}</a>
                </p>
              ))}
            </div>
            <div>
              {Laptop.map((item) => (
                <p key={item.id}>
                  <b><a href="#">{item.LoginTitle}</a></b>
                  <a href="#">{item.name}</a>
                </p>
              ))}
            </div>
            <div>
              {Alls.map((item) => (
                <p key={item.id}>
                  <b><a href="#">{item.LoginTitle}</a></b>
                  <a href="#">{item.name}</a>
                </p>
              ))}
            </div>
            <div>
              {Featured.map((item) => (
                <p key={item.id}>
                  <b><a href="#">{item.LoginTitle}</a></b>
                  <a href="#">{item.name}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='Login_main'>
        <div className='login_left'>
          <div>
            <h1>Login</h1>
            <p>Get access to your Orders, <br /> Wishlist and Recommendations</p>
          </div>
          <div>
            <img src="icons/login_img.png" alt="" />
          </div>
        </div>
        <div className='login_right'>
          <div>
            <input type="text" name="" id="" placeholder='Enter Email/Phone Number'/>
            <p>By continuing, you agree to Flipkart's <a href="#"> Terms of Use </a> and <a href="#">Privacy Policy. </a></p>
            <button>Request OTP</button>
          </div>
          <div>
            <b><a href="#">New to Flipkart? Create an account</a></b>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
