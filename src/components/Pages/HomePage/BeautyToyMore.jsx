import React, { useRef } from 'react';

const BeautyToyMore = () => {
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
                    <h2>Beauty , Food , Toy & More</h2>
                </div>
                <button className="prevBtn" onClick={() => scroll(-300)}>‹</button>
                <button className="nextBtn" onClick={() => scroll(300)}>›</button>
                <ul ref={scrollRef}>
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/coffee_powder.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Coffee Powder</p>
                                <b>Upto 80% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/toyCar.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Remote Control Car</p>
                                <b>Upto 80% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/teddyBear.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Soft Toy</p>
                                <b>Upto 70% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/cycle1.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Electric Cycles</p>
                                <b>Upto 40% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/superMan.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Best of Action Toy</p>
                                <b>Upto 70% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/GymAssential.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Gym Assentials</p>
                                <b>From ₹139</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/stationalry.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Top Selling Stationery</p>
                                <b>From ₹39</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="BeautyFoodToy/cycle.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Non-Geared Cycles</p>
                                <b>Upto 40% off</b>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default BeautyToyMore
