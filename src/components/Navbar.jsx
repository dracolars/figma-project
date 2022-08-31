import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faSquarePhoneFlip, faBars, faTimes, faMagnifyingGlassMinus} from '@fortawesome/free-solid-svg-icons';
import '../index.css'



const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[search, setSearch] = useState(false)
    const handleClickMenu = () => setNav(!nav)
    const handleClickSearch = () => setSearch(!search)
  return (
      <div class="header">
          <div class="utility-navigation" className='w-full hidden lg:md:flex px-[6em] py-[.5em] bg-[#F5F6F6]'>
              <div class="utility-nav-left" className='w-1/3 px-4'>
                    <a href="tel:866.952.7200" className='font-[300] lg:md:text-sm sm:text-xs'>
                        <FontAwesomeIcon icon={faSquarePhoneFlip} className="pr-2" /> 866.952.7200
                    </a>
              </div>
              <div class="utility-nav-right" className='w-2/3 text-right lg:md:pr-10 sm:pr-2'>
                  <a href="/" className="px-3 inline-block font-[300] lg:md:text-sm sm:text-xs"> Utility Navigation Link One </a>
                  <a href="/" className="px-3 inline-block font-[300] lg:md:text-sm sm:text-xs"> Utility Navigation Link Two </a>
              </div>
          </div>

          <div className="w-full lg:flex hidden xl:px-16 px-5 py-4">
                <div class="topspot-logo" className="w-1/4 inline-block min-w-[15em]">
                  <img class="logo" src="./topspot-logo.png" alt="topspot logo" className="h-10 pl-12"></img>
                 </div>
                 <div class="navigation-boxes" className="w-3/4 py-2 lg:pr-14 pr-0">
                    <div className='float-right'>
                        <li className="text-[0.85em] font-[600] inline-block px-5"> <a href="/"> <p className='text-[#E56E39]'> HOME </p> </a> </li>
                        <li className="text-[0.85em] font-[600] inline-block px-5"> <a href="/"> <p> ABOUT </p> </a> </li>
                        <li className="text-[0.85em] font-[600] inline-block px-5"> <a href="/"> <p> SERVICES </p> </a> </li>
                        <li className="text-[0.85em] font-[600] inline-block px-5"> <a href="/"> <p> CONTACT </p> </a> </li>
                        <li className="text-[0.85em] font-[600] inline-block pl-6">
                            <form class="search" className='border-[1px] border-black py-[.3em] px-2'>
                                <input type="search" name="q" placeholder="Search Site" className='py-1 px-2 text-sm font-[300] lg:w-48 w-20 text-[#003E50]'/>
                                <button type='submit' className='px-2 font-[400] text-[#003E50]'>
                                  <FontAwesomeIcon icon={faMagnifyingGlass} className="font-extralight" />
                                 </button>
                            </form>
                         </li>
                     </div>
                </div>
            </div>

        {/* START Small Header */}

            <div className='flex lg:hidden'>
                <div class="topspot-logo" className="w-1/4 py-5">
                    <img class="logo" src="./topspot-logo.png" alt="topspot logo" className="h-8 pl-2 sm:pl-4 object-contain"></img>
                </div>
                <div className='w-1/2 m-auto'>
                    <a href="tel:8669527200"> <p className='text-center text-xl font-bold hover:text-[#E56E39]'> 866.952.7200 </p> </a>
                </div>
                <div className='w-1/4 m-auto flex'>
                    <div onClick={handleClickSearch} className="w-1/8 m-auto" >
                        <div className='text-center'>
                            {!search ? <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-[#003E50] hover:text-[#E56E39]"/> :
                            <FontAwesomeIcon icon={faMagnifyingGlassMinus} className="text-xl text-[#003E50] hover:text-[#E56E39]"/>}
                        </div>
                    </div>
                    <div onClick={handleClickMenu} className="m-auto text-center" >
                            {!nav ? <FontAwesomeIcon icon={faBars} className="text-xl text-[#003E50] hover:text-[#E56E39]"/> :
                            <FontAwesomeIcon icon={faTimes} className="text-xl text-[#003E50] hover:text-[#E56E39]"/>}
                    </div>
                </div>
            </div>
    
          
          <div className={!nav ? 'hidden' : 'block lg:hidden py-4'}>
              <div class="navigation-boxes" className="text-center m-auto flex">
                  <div className="m-auto">
                      <li className="font-bold inline-block px-4"> <a href="/"> <p className='text-sm'> HOME </p> </a> </li>
                      <li className="font-bold inline-block px-4"> <a href="/"> <p className='text-sm'> ABOUT </p> </a> </li>
                      <li className="font-bold inline-block px-4"> <a href="/"> <p className='text-sm'> SERVICES </p> </a> </li>
                      <li className="font-bold inline-block px-4"> <a href="/"> <p className='text-sm'> CONTACT </p> </a> </li>
                  </div>
                </div>
          </div>

          <div className={!search ? 'hidden' : 'block lg:hidden py-4'}>
              <div class="navigation-boxes" className="text-center m-auto flex">
                  <div className="m-auto">
                        <form class="search" className='border-[1px] border-black py-[.3em] px-2'>
                            <input type="search" name="q" placeholder="Search Site" className='py-1 px-2 text-sm font-[300] w-48 text-[#003E50]'/>
                            <button type='submit' className='px-2 font-[400] text-[#003E50]'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="font-extralight" />
                            </button>
                        </form>
                    </div>
                </div>
          </div>


          {/* END Small Header*/}

          <div className='h-[0.5em] bg-[#E56E39]' >
          </div>

      </div>
  )
}

export default Navbar