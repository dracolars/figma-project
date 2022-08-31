import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";


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
            <div className='w-3/5 px-8 py-10 md:p-20 lg:p-32'>
                <h1 className='text-white text-[700] lg:text-[2.5em] md:text-[2em] text-[1.5em] lg:leading-10 md:leading-8 leading-6'>
                    H1 - HERO SLIDER HEADLINE OPTION GOES HERE
                </h1>
                <p className="text-white text-xs lg:text-[1em] text-[200] py-2">
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
            <div className='w-2/5 lg:pt-12 md:pt-10 sm:pt-20 pt-28 overflow-hidden px-2'>
                <img alt="phone" src='../phone.png' className=' w-[22em] z-0'/>
            </div>
        </div>
        <div id="slide-two" className="bg-[#0064ab] flex lg:h-[30em] md:h-[24em] h-[21em]">
            <div className='w-3/5 px-8 py-10 md:p-20 lg:p-32'>
                <h1 className='text-white text-[700] lg:text-[2.5em] md:text-[2em] text-[1.5em] lg:leading-10 md:leading-8 leading-6'>
                    H1 - HERO SLIDER HEADLINE OPTION GOES HERE
                </h1>
                <p className="text-white text-xs lg:text-[1em] text-[200] py-2">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint.
                </p>
                <div className='flex'>
                    <div className='lg:pr-2 pr-1'>
                        <button className='py-[0.5em] bg-[#d66433] border-[#d66433] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>
                    <div className='lg:pl-2 pl-1'>
                        <button className='py-[0.5em] bg-[#d66433] border-[#d66433] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>    
                </div>        
            </div>
            <div className='w-2/5 lg:pt-12 md:pt-10 sm:pt-20 pt-28 overflow-hidden px-2'>
                <img alt="phone" src='../phone.png' className=' w-[22em] z-0'/>
            </div>
        </div>
        <div id="slide-three" className="bg-[#004aab] flex lg:h-[30em] md:h-[24em] h-[21em]">
            <div className='w-3/5 px-8 py-10 md:p-20 lg:p-32'>
                <h1 className='text-white text-[700] lg:text-[2.5em] md:text-[2em] text-[1.5em] lg:leading-10 md:leading-8 leading-6'>
                    H1 - HERO SLIDER HEADLINE OPTION GOES HERE
                </h1>
                <p className="text-white text-xs lg:text-[1em] text-[200] py-2">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint.
                </p>
                <div className='flex'>
                    <div className='lg:pr-2 pr-1'>
                        <button className='py-[0.5em] bg-[#ce5d2c] border-[#ce5d2c] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>
                    <div className='lg:pl-2 pl-1'>
                        <button className='py-[0.5em] bg-[#ce5d2c] border-[#ce5d2c] border-2 hover:bg-transparent md:px-8 px-4 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                    </div>    
                </div>        
            </div>
            <div className='w-2/5 lg:pt-12 md:pt-10 sm:pt-20 pt-28 overflow-hidden px-2'>
                <img alt="phone" src='../phone.png' className=' w-[22em] z-0'/>
            </div>
        </div>
      </Slide>
    )
}

export default Slideshow
