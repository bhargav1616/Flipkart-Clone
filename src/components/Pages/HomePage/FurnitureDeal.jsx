import { useRef } from "react"

const FurnitureDeal = () => {
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
                    <h2>Furniture Deals</h2>
                </div>
                <button className="prevBtn" onClick={() => scroll(-300)}>‹</button>
                <button className="nextBtn" onClick={() => scroll(300)}>›</button>
                <ul ref={scrollRef}>
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad1.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Sofa Beds</p>
                                <b>From ₹6,790</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad2.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Beds</p>
                                <b>From ₹1,790</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad3.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Sofa & Sectional</p>
                                <b>From ₹7,999</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad4.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Office Study Chair</p>
                                <b>From ₹1,890</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad5.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Sofa Beds</p>
                                <b>From ₹6,099</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad6.jpeg" alt="" />
                            <div className='product_info'>
                                <p>TV Units</p>
                                <b>From ₹1,249</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad7.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Sofa Sets</p>
                                <b>From ₹21,999</b>
                            </div>
                        </a>
                    </li>
                    <hr className='my_hr' />
                    <li>
                        <a href="#" className='product_details'>
                            <img src="FurnitureDeal/bad8.jpeg" alt="" />
                            <div className='product_info'>
                                <p>Mattresses</p>
                                <b>From ₹2,990</b>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default FurnitureDeal
