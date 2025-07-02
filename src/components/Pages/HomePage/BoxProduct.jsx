import React from 'react'
import '../../.././Style/BoxProduct.css';

const BoxProduct = (props) => {
    return (
        <div>
            <ul>
                <li className='product'>
                    <a href="#">
                        <img src={props.img} alt={props.title} className='product_img'/>
                        <div className='box_product_info'>
                            <p> {props.title} </p>
                            <b> {props.price} </b>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default BoxProduct
