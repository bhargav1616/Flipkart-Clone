import { useRef } from 'react';
import '../../.././Style/BestOfElectronic.css';

const BestOfElectronic = () => {
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
        <>
            <div className='best_of_electronic_main'>
                <div className='best_of_electronic'>
                    <div className='product_info'>
                        <h2>Best Of Electronics</h2>
                    </div>
                    <button className="prevBtn" onClick={() => scroll(-300)}>‹</button>
                    <button className="nextBtn" onClick={() => scroll(300)}>›</button>
                    <ul ref={scrollRef}>
                        <li >
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/buds.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>Best TrueWireless Buds</p>
                                    <b>Grab Now</b>
                                </div>
                            </a>
                        </li>
                        <hr className='my_hr' />
                        <li>
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/print_cemaro.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>Top Mirrorless Camero</p>
                                    <b>Shop Now!</b>
                                </div>
                            </a>
                        </li>
                        <hr className='my_hr' />
                        <li>
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/whatch.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>Noise SmartWatches</p>
                                    <b>From ₹1,099</b>
                                </div>
                            </a>
                        </li>
                        <hr className='my_hr' />
                        <li>
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/whatch1.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>Fasttrack SmartWatches</p>
                                    <b>From ₹1,399</b>
                                </div>
                            </a>
                        </li>
                        <hr className='my_hr' />
                        <li>
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/speaker.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>Best Selling Mobile Speaker </p>
                                    <b>From ₹499*</b>
                                </div>
                            </a>
                        </li>
                        <hr className='my_hr' />
                        <li>
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/tv2.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>Asus Monitor</p>
                                    <b>From ₹14999</b>
                                </div>
                            </a>
                        </li>
                        <hr className='my_hr' />
                        <li>
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/tv.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>View Sonic Monitor</p>
                                    <b>From ₹8000</b>
                                </div>
                            </a>
                        </li>
                        <hr className='my_hr' />
                        <li>
                            <a href="#" className='product_details'>
                                <img src="bestOfElectronic/shaver.jpeg" alt="" />
                                <div className='product_info'>
                                    <p>Best of Shavers</p>
                                    <b>From ₹1,649 </b>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className='flight_section'>
                    <img src="bestOfElectronic/flight.png" alt="" className='flight_img' />
                </div>
            </div>
        </>
    )
}

export default BestOfElectronic
