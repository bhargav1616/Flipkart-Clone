import React from 'react';
import BoxProduct from './BoxProduct';
import '../../../Style/BoxProduct.css';

// ********** First Section Images **********
import Boxer from '../../../assets/SquareProductImg/boxer1.jpeg';
import Shoes from '../../../assets/SquareProductImg/shoes1.jpeg';
import Bag from '../../../assets/SquareProductImg/bag1.jpeg';
import Tshirt from '../../../assets/SquareProductImg/t-shirt1.jpeg';

import Speaker from '../../../assets/SquareProductImg/speaker2.jpeg';
import Headphones from '../../../assets/SquareProductImg/headphone2.jpeg';
import Camera from '../../../assets/SquareProductImg/miniCamero2.jpeg';
import Laptop from '../../../assets/SquareProductImg/laptop2.jpeg';

import Mandir from '../../../assets/SquareProductImg/mandir3.jpeg';
import ShoeRack from '../../../assets/SquareProductImg/showRack3.jpeg';
import MosquitoNet from '../../../assets/SquareProductImg/mosquitoNet3.jpeg';
import BathTowel from '../../../assets/SquareProductImg/bathTowel3.jpeg';

const BoxProductGet = () => {
  return (
    <>
      {/* ********** First Main Section ********** */}
      <div className='box_product_main'>
        <div className='box_product'>
          <div className='box_product_under'>
            <BoxProduct img={Boxer} title="Men's Boxer" price="Min. 50% off" />
            <BoxProduct img={Shoes} title="Men's Casual Shoes" price="Min. 70% off" />
          </div>
          <div className='box_product_under'>
            <BoxProduct img={Bag} title="Backpacks" price="Min. 70% off" />
            <BoxProduct img={Tshirt} title="Men's T-Shirts" price="Min. 50% off" />
          </div>
        </div>

        {/* Second box_product */}
        <div className='box_product'>
          <div className='box_product_under'>
            <BoxProduct img={Speaker} title="Speaker" price="Min. 50% off" />
            <BoxProduct img={Headphones} title="Headphones" price="Min. 70% off" />
          </div>
          <div className='box_product_under'>
            <BoxProduct img={Camera} title="Mini Camera" price="Min. 70% off" />
            <BoxProduct img={Laptop} title="Laptop" price="Min. 50% off" />
          </div>
        </div>

        {/* Third box_product */}
        <div className='box_product'>
          <div className='box_product_under'>
            <BoxProduct img={Mandir} title="Mandir" price="Min. 50% off" />
            <BoxProduct img={ShoeRack} title="Shoe Rack" price="Min. 70% off" />
          </div>
          <div className='box_product_under'>
            <BoxProduct img={MosquitoNet} title="Mosquito Net" price="Min. 70% off" />
            <BoxProduct img={BathTowel} title="Bath Towel" price="Min. 50% off" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxProductGet;
