import React, { useRef } from 'react';

const SportsHealthMore = () => {
    const scrollRef = useRef();

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className='best_of_electronic_main'>
            <div className='best_of_electronic'>
                <div className='product_info'>
                    <h2>Sports , Healthcare & More</h2>
                </div>
                <button className="prevBtn" onClick={() => scroll(-300)}>‹</button>
                <button className="nextBtn" onClick={() => scroll(300)}>›</button>
                <ul ref={scrollRef}>
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/treadmill.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Treadmill</p>
                                <b>Upto 70% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/worldCube.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Best TrueWireless Buds</p>
                                <b>Grab Now</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/cycle.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Geared Cycles</p>
                                <b>Upto 70% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/peanutButter.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Food Spreads</p>
                                <b>Grab Now</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/breackfastCereals.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Best TrueWireless Buds</p>
                                <b>Grab Now</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/teaPowder.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Best TrueWireless Buds</p>
                                <b>Grab Now</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/dryFruits.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Best TrueWireless Buds</p>
                                <b>Grab Now</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="sportsHealthcareMore/yogaMat.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Best TrueWireless Buds</p>
                                <b>Grab Now</b>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SportsHealthMore
