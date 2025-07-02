import { useRef } from 'react'

const TopDeals = () => {
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
                    <h2>Top Deals</h2>
                </div>
                <button className="prevBtn" onClick={() => scroll(-300)}>‹</button>
                <button className="nextBtn" onClick={() => scroll(300)}>›</button>
                <ul ref={scrollRef}>
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals1.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Apple iPads</p>
                                <b>Shop Now!</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals2.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Buy Now</p>
                                <b>From ₹99</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals3.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Camera Bags</p>
                                <b>Min. 50% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals4.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Alien Solly</p>
                                <b>Min. 40% off</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals5.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Instax Cameras</p>
                                <b>From ₹3,999</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals6.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Grab Now</p>
                                <b>From ₹99</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals7.jpg" alt="" />
                            <div className='product_info'>
                                <p>Bata</p>
                                <b>Under ₹499</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="TopDeals/TopDeals8.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Apple Pencil</p>
                                <b>Shop Now</b>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default TopDeals
