import React, { useState } from 'react';
import '../../.././Style/SecondItem.css';

const SecondItemDropdown = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (menuName) => {
        setActiveDropdown(menuName);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div className='second_main' onMouseLeave={handleMouseLeave}>
            <ul>
                <li>
                    <img src="secondItem/grocery.png" alt="" />
                    <p>Grocery</p>
                </li>

                <li>
                    <img src="secondItem/mobiles.png" alt="" />
                    <p>Mobiles</p>
                </li>

                <li className="dropdown">
                    <img
                        src="secondItem/fashion.png" alt="" onMouseEnter={() => handleMouseEnter('fashion')} />
                    <p>Fashion <img src="icons/down_arrow.svg" alt="" /></p>
                </li>

                <li className="dropdown">
                    <img src="secondItem/electronics.png" alt="" onMouseEnter={() => handleMouseEnter('electronics')} />
                    <p>Electronics <img src="icons/down_arrow.svg" alt="" /></p>
                </li>

                <li>
                    <img src="secondItem/appliances.jpg" alt="" />
                    <p>Appliances</p>
                </li>

                <li>
                    <img src="secondItem/flights.png" alt="" />
                    <p>Flight Bookings</p>
                </li>

                <li className="dropdown">
                    <img src="secondItem/beauty_toys.png" alt="" onMouseEnter={() => handleMouseEnter('beauty')} />
                    <p>Beauty,Toy & More <img src="icons/down_arrow.svg" alt="" /></p>
                </li>

                <li className="dropdown">
                    <img src="secondItem/two_wheelers.png" alt="" onMouseEnter={() => handleMouseEnter('twoWheelers')} />
                    <p>Two Wheelers <img src="icons/down_arrow.svg" alt="" /></p>
                </li>
            </ul>

            {/* Dropdown menus outside ul */}
            {activeDropdown === 'fashion' && (
                <div className="dropdown-menus fashion-dropdown" onMouseEnter={() => handleMouseEnter('fashion')} onMouseLeave={handleMouseLeave}>
                    <b>Men's Top Wear</b>
                    <hr />
                    <p><a href="">All</a></p>
                    <p><a href="">Men's T-Shirts</a></p>
                    <p><a href="">Men's Casual Shirts</a></p>
                    <p><a href="">Men's Formal Shirts</a></p>
                    <p><a href="">Men's Kurtas</a></p>
                    <p><a href="">Men's Ethnic Shirts</a></p>
                    <p><a href="">Men's Blazers</a></p>
                    <p><a href="">Men's Raincoat</a></p>
                    <p><a href="">Men's Windcheaters</a></p>
                    <p><a href="">Men's Suit</a></p>
                </div>
            )}

            {activeDropdown === 'electronics' && (
                <div className="dropdown-menus electronics-dropdown" onMouseEnter={() => handleMouseEnter('electronics')} onMouseLeave={handleMouseLeave}>
                    <b className='title'>More In Audio</b>
                    <hr />
                    <p><a href="">All</a></p>
                    <p><a href="">Bluetooth Headphones</a></p>
                    <p><a href="">Wired Headphones</a></p>
                    <p><a href="">True Wireless Earbuds</a></p>
                    <p><a href="">Bluetooth Speakers</a></p>
                    <p><a href="">Soundbars</a></p>
                    <p><a href="">Home Theatres</a></p>
                    <p><a href="">TV Streaming Device</a></p>
                    <p><a href="">Remote Control</a></p>
                    <p><a href="">DTH Set top box</a></p>
                </div>
            )}

            {activeDropdown === 'beauty' && (
                <div className="dropdown-menus beauty-dropdown" onMouseEnter={() => handleMouseEnter('beauty')} onMouseLeave={handleMouseLeave}>
                    <b className='title'>More in Beauty & <br /> Personal Care</b>
                    <hr />
                    <p><a href="">View All</a></p>
                    <p><a href="">Bath & Oral Care</a></p>
                    <p><a href=""> Personal Hygiene</a></p>
                    <p><a href=""> Eye Makeup</a></p>
                    <p><a href="">Face Makeup</a></p>
                    <p><a href=""> Lip Makeup</a></p>
                    <p><a href="">Hair Care</a></p>
                    <p><a href="">Bath Essentials</a></p>
                    <p><a href="">Woman's Personal Hygiene</a></p>
                    <p><a href="">Body & Skin Care</a></p>
                </div>
            )}

            {activeDropdown === 'twoWheelers' && (
                <div className="dropdown-menus twoWheelers-dropdown" onMouseEnter={() => handleMouseEnter('twoWheelers')} onMouseLeave={handleMouseLeave}>
                    <b className='title'>Petrol Vehicles</b>
                    <hr />
                    <p><a href="">Electric Vehicles</a></p>
                </div>
            )}
        </div>
    );
};

export default SecondItemDropdown;
