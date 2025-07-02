import React from 'react';
import '.././Style/Footer.css';

const Footer = () => {
  return (
    <div className='footer_main'>
      <div>
        <p className='footer_title'>About</p>
        <p><a href="#">Contact Us</a></p>
        <p><a href="#">About Us</a></p>
        <p><a href="#">Careers</a></p>
        <p><a href="#">Flipkart Stories</a></p>
        <p><a href="#">Press</a></p>
        <p><a href="#">Corporate Information</a></p>
      </div>

      <div>
        <p className='footer_title'>Group Companies</p>
        <p><a href="#">Myntra</a></p>
        <p><a href="#">Cleartrip</a></p>
        <p><a href="#">Shopsy</a></p>
      </div>

      <div>
        <p className='footer_title'>Help</p>
        <p><a href="#">Payments</a></p>
        <p><a href="#">Shipping</a></p>
        <p><a href="#">Cancellation & Returns</a></p>
        <p><a href="#">FAQ</a></p>
      </div>

      <div>
        <p className='footer_title'>Consumer Policy</p>
        <p><a href="#">Cancellation & Returns</a></p>
        <p><a href="#">Terms Of Use</a></p>
        <p><a href="#">Security</a></p>
        <p><a href="#">Privacy</a></p>
        <p><a href="#">Sitemap</a></p>
        <p><a href="#">Grievance Redressal</a></p>
        <p><a href="#">EPR Compliance</a></p>
      </div>

      <div className="vertical-line"></div>

      <div>
        <p className='footer_title2'>Mail Us:</p>
        <p>Flipkart Internet Private Limited,</p>
        <p>Buildings Alyssa, Begonia &</p>
        <p>Clove Embassy Tech Village,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
        <p>Bengaluru, 560103,</p>
        <p>Karnataka, India</p>
        <p>Social :</p>
        <ul className='footer_social'>
          <li><a href="#"><img src="icons/facebook.svg" alt="" /></a></li>
          <li><a href="#"><img src="icons/twiter.svg" alt="" /></a></li>
          <li><a href="#"><img src="icons/youtube.svg" alt="" /></a></li>
        </ul>
      </div>

      <div>
        <p className='footer_title2'>Registered Office Address:</p>
        <p>Flipkart Internet Private Limited,</p>
        <p>Buildings Alyssa, Begonia &</p>
        <p>Clove Embassy Tech Village,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
        <p>Bengaluru, 560103,</p>
        <p>Karnataka, India</p>
        <p>CIN: U51109KA2012PTC066107</p>
        <p>Telephone: 044-45614700/044-67415800</p>
      </div>


      <div className='footer_list'>
        <p><a href="#"><img src="icons/sell_image.svg" alt="" /> Become a Seller</a></p>
        <p><a href="#"><img src="icons/star_spped.svg" alt="" /> Advertise</a></p>
        <p><a href="#"><img src="icons/gift_cards.svg" alt="" /> Gift Cards</a></p>
        <p><a href="#"><img src="icons/help_center.svg" alt="" /> Help Center</a></p>
        <p>© 2007-2025 flipkart.com</p>
        <p><a href="#"><img src="icons/payment_png.svg" alt="" className='payment_png'/></a></p>
      </div>
    </div>
  )
}

export default Footer;
