import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Phone from '../media/phone.png'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div id="slide-one" className="bg-[#007BAB] flex lg:h-[30em] md:h-[24em] h-[21em]">
            <div className='sm:w-3/5 w-100% px-10 py-10 sm:p-18 lg:p-28'>
                <h1 className='text-white text-[700] lg:text-[2.5em] text-[1.6em] pt-6 lg:pt-0 lg:pb-2 sm:pr-0 lg:leading-10 md:leading-10 leading-8'>
                    H1 - HERO SLIDER HEADLINE OPTION GOES HERE
                </h1>
                <p className="text-white text-xs lg:text-[1em] sm:py-4 py-2 sm:pr-18 pt-2 pb-4 lg:pt-0 lg:pb-10 sm:pt-2 md:pr-2 md:leading-[22px] leading-[18px]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint.
                </p>
                <div className='flex'>
                    <div className='lg:pr-2 pr-1'>
                        <button className='py-[0.5em] bg-[#E56E39] border-[#E56E39] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>
                    <div className='lg:pl-2 pl-1'>
                        <button className='py-[0.5em] bg-[#E56E39] border-[#E56E39] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>    
                </div>        
            </div>
            {/* PHONE IMAGE - Hidden until size > md */}
            <div className='w-2/5 lg:pt-12 sm:pt-20 pt-28 overflow-hidden px-2 hidden sm:block'>
                <img alt="phone" src={Phone} className=' w-[22em] z-0'/>
            </div>
        </div>
        <div id="slide-two" className="bg-[#0064ab] flex lg:h-[30em] md:h-[24em] h-[21em]">
        <div className='md:w-3/5 w-100% px-10 py-10 md:p-18 lg:p-28'>
                <h1 className='text-white text-[700] lg:text-[2.5em] text-[1.8em] pt-6 lg:pt-0 sm:pr-20 md:pr-0 lg:leading-10 md:leading-10 leading-8'>
                    H1 - HERO SLIDER HEADLINE OPTION GOES HERE
                </h1>
                <p className="text-white text-xs lg:text-[1em] sm:py-4 py-2 sm:pr-28 pt-2 pb-4 lg:pt-0 md:pt-2 md:pr-0 md:leading-[22px] leading-[18px]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint.
                </p>
                <div className='flex'>
                    <div className='lg:pr-2 pr-1'>
                        <button className='py-[0.5em] bg-[#E56E39] border-[#E56E39] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>
                    <div className='lg:pl-2 pl-1'>
                        <button className='py-[0.5em] bg-[#E56E39] border-[#E56E39] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>    
                </div>        
            </div>
            {/* PHONE IMAGE - Hidden until size > md */}
            <div className='w-2/5 lg:pt-12 md:pt-10 sm:pt-20 pt-28 overflow-hidden px-2 hidden md:block'>
                <img alt="phone" src={Phone} className=' w-[22em] z-0'/>
            </div>
        </div>
        <div id="slide-three" className="bg-[#004aab] flex lg:h-[30em] md:h-[24em] h-[21em]">
        <div className='md:w-3/5 w-100% px-10 py-10 md:p-18 lg:p-28'>
                <h1 className='text-white text-[700] lg:text-[2.5em] text-[1.8em] pt-6 lg:pt-0 sm:pr-20 md:pr-0 lg:leading-10 md:leading-10 leading-8'>
                    H1 - HERO SLIDER HEADLINE OPTION GOES HERE
                </h1>
                <p className="text-white text-xs lg:text-[1em] sm:py-4 py-2 sm:pr-28 pt-2 pb-4 lg:pt-0 md:pt-2 md:pr-0 md:leading-[22px] leading-[18px]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint.
                </p>
                <div className='flex'>
                    <div className='lg:pr-2 pr-1'>
                        <button className='py-[0.5em] bg-[#E56E39] border-[#E56E39] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>
                    <div className='lg:pl-2 pl-1'>
                        <button className='py-[0.5em] bg-[#E56E39] border-[#E56E39] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>    
                </div>        
            </div>
            {/* PHONE IMAGE - Hidden until size > md */}
            <div className='w-2/5 lg:pt-12 md:pt-10 sm:pt-20 pt-28 overflow-hidden px-2 hidden md:block'>
                <img alt="phone" src={Phone} className=' w-[22em] z-0'/>
            </div>
        </div>
      </Slide>
    )
}

export default Slideshow
