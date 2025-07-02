import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import MainLogo from '.././assets/SquareProductImg/mylogo.jpg';


export const Header = ({ bgColor, Logo = MainLogo ,loginColor}) => {
    return (
        <>
            <div className="navbar">
                <ul style={{ backgroundColor: bgColor }}>
                    <li><a href="#"><img src={Logo} alt="Logo" className="menu_img myLogo"/></a></li>
                    <div>
                        <input type="text" placeholder="Seacrh for Product , Brands and More" />
                    </div>
                    <li className="dropdown" >
                        <Link to="/login">
                            <img src="icons/profile.svg" alt="" className="menu_img" /> <span style={{ color: loginColor }}>Login</span>
                        </Link>
                        <ul className="dropdown-menu">
                            <div className="sign-up-d-down">
                                <b><a href="#">New Customer?</a></b>
                                <button className="sign_up_btn">SignUp</button>
                            </div>
                            <hr className="" />
                            <div className="Sign_up_menu">
                                <p><img src="icons/profile.svg" className="menu_img" alt="" /><a href="#">My Profile </a></p>
                                <p><img src="icons/fkplus.svg" className="menu_img" alt="" /><a href="#">Flipkart Plus Zone</a></p>
                                <p><img src="icons/orders.svg" className="menu_img" alt="" /><a href="#">Orders</a></p>
                                <p><img src="icons/wishlist.svg" className="menu_img" alt="" /><a href="#">Whislist</a></p>
                                <p><img src="icons/reward.svg" className="menu_img" alt="" /><a href="#">Reward</a></p>
                                <p><img src="icons/gift-card.svg" className="menu_img" alt="" /><a href="#"> Gift Cards</a></p>
                            </div>
                        </ul>
                    </li>


                    <li><a href="#"><img src="icons/cart.svg" alt="" className="menu_img" /> <span className="name_hide" style={{ color: loginColor }}>Cart</span> </a></li>
                    <li><a href="#"><img src="icons/store.svg" alt="" className="menu_img" /> <span className="name_hide" style={{ color: loginColor }}>Become a Seller</span></a></li>

                    <li className="dropdown"><a href="#"><img src="icons/menu-dots.svg" alt="" /></a>
                        <ul className="dropdown-menu-dots">
                            <div className="Sign_up_menu">
                                <p><img src="icons/notification.svg" className="menu_img" alt="" /><a href="#">My Profile </a></p>
                                <p><img src="icons/helpcenter.svg" className="menu_img" alt="" /><a href="#">Flipkart Plus Zone</a></p>
                                <p><img src="icons/download.svg" className="menu_img" alt="" /><a href="#">Orders</a></p>
                                <p><img src="icons/advertise.svg" className="menu_img" alt="" /><a href="#">Whislist</a></p>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

