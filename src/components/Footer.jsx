import React from 'react';
import TopSpotIcon from '../media/topspot-small-logo.png';
import TopSpotLetters from '../media/topspot-letters.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <div className='relative'>
      <div class="back-up" title="Click to top of page">
        <button class="back-up" onClick={scrollToTop}> <FontAwesomeIcon icon={faAngleUp}/> </button>
      </div>

      <div class="footer" className='bg-[#002A37] w-full lg:px-[6.5em] px-[2em] lg:py-12 py-8 text-white md:lg:flex sm:inline-block text-xs md:text-[1em]'>
            <div className='lg:w-1/4 py-4 px-4 mx-auto'>
              <div class="logo-wrapper" className='flex py-2'>
                <img src={TopSpotIcon} alt='topspot small logo' className='w-[2.5em] h-[100%] opacity-40'></img>
                <img src={TopSpotLetters} alt='topspot letters' className='w-[6em] h-[100%] px-1 py-2 opacity-40'></img>
              </div>
              <p className='py-4'>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.</p>
              <p className='py-6 text-[.6em]'>© 2017 TopSpot Internet Marketing.</p>
            </div>
            <div className='lg:w-10/12 lg:pr-4 sm:flex m-auto'>
                <div className='lg:w-1/3 md:w-1/3 py-4 px-4 m-auto'>
                  <h4 className='py-4 font-bold'>25% Block Quick Links</h4>
                    <ul class="footer-quick-links">
                      <li class="footer-links-li" ><a href="/">Lorem ipsum dolor sit amet</a></li>
                      <li class="footer-links-li" ><a href="/">Maecenas ornare nisi</a></li>
                      <li class="footer-links-li" ><a href="/">Quisque tincidunt ac eros</a></li>
                      <li class="footer-links-li" ><a href="/">Vestibulum non risus fermentum</a></li>
                      <li class="footer-links-li" ><a href="/">Lorrem Ipsum</a></li>
                      <li class="footer-links-li" ><a href="/">Ipsum</a></li>
                      <li class="footer-links-li" ><a href="/">Phasellus imperdiet</a></li>
                      <li class="footer-links-li" ><a href="/">Aenean luctus nisl a magna</a></li>
                    </ul>
                </div>
      
                <div className='lg:w-1/3 md:w-1/3 py-4 px-4 mx-auto'>
                  <h4 className='py-4 font-bold'>25% Block Quick Links</h4>
                    <ul class="footer-quick-links">
                      <li class="footer-links-li" ><a href="/">Lorem ipsum dolor sit amet</a></li>
                      <li class="footer-links-li" ><a href="/">Maecenas ornare nisi</a></li>
                      <li class="footer-links-li" ><a href="/">Quisque tincidunt ac eros</a></li>
                      <li class="footer-links-li" ><a href="/">Vestibulum non risus fermentum</a></li>
                      <li class="footer-links-li" ><a href="/">Lorrem Ipsum</a></li>
                      <li class="footer-links-li" ><a href="/">Ipsum</a></li>
                      <li class="footer-links-li" ><a href="/">Phasellus imperdiet</a></li>
                      <li class="footer-links-li" ><a href="/">Aenean luctus nisl a magna</a></li>
                    </ul>
                </div>
      
                <div className='lg:w-1/3 md:w-1/3 py-4 px-4 mx-auto'>
                  <h4 className='py-4 font-bold'>Contact Information</h4>
                  <p class="footer-address">
                    Address:<br/>
                    TopSpot Internet Marketing<br/>
                    515 Post Oak Blvd, Ste 300<br/>
                    Houston, TX 77027<br/><br/>
      
                    Phone:<br/>
                    <a href="tel:866.952.7200" className='hover:text-[#E56E39]'>866.952.7200</a>
                  </p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Footer