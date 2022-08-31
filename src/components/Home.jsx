import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage, faPlay} from '@fortawesome/free-solid-svg-icons';
import {faModx} from '@fortawesome/free-brands-svg-icons';
import '../index.css'


const Home = () => {
    return(
        <div class="main" className="bg-white w-full"> 
  
        {/* START BODY */}
        <div class="body" className='w-full'>

          <div class="content-section-one" className='lg:px-32 px-8 py-10'>
            <h1 className='py-2 uppercase text-xl md:text-3xl'> H1 - 100% Width Content Section </h1>
            <p class="content-text"> Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id,
              tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut.
              Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio.
              Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum
              ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.
            </p>
            <p class="content-text"> In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis
            tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor
            velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.Fusce vehicula dolor
            arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis
            nunc sollicitudin ultrices. Donec euismod scelerisque ligu.
            </p>
          </div>
  
          <div class="content-section-two" className='min-h-[30em] bg-[#003E50] lg:px-28 px-8 py-14 text-xs md:text-[1em]'>
            <h2 className='py-4 text-center uppercase text-white'> H2 - CENTERED HEADING </h2>
            <p class="content-text-centered">Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
             Pellentesque non dignissim neque. <br></br> Ut porta viverra est, ut dignissim elit elementum ut.
            Nunc vel rhoncus nibh, ut tincidunt turpis.<br></br> Integer ac enim pellentesque, adipiscing metus id, pharetra odio.</p>
  
            <div class="three-buckets" className='lg:flex inline justify-center py-8'>
              <div class="bucket-div" className='lg:w-1/3 w-1/2 lg:h-min-[20em] lg:px-4 py-2 px-1 text-white inline-block'>
                <div className='bg-[#E56E39] text-center py-8'>
                  <FontAwesomeIcon icon={faImage} className="py-2 lg:text-7xl text-4xl"/>
                  <h3 className='px-8 py-1 font-[600] text-2xl'> Bucket Title</h3>
                  <p className='px-10 py-2 text-md font-thin'>Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
                    Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel.</p>
                  <div className='py-4'>
                     <button className='py-[0.5em] bg-transparent hover:bg-white hover:text-[#E56E39] px-8 border-white border-2 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                  </div>
                </div>
              </div>
              <div class="bucket-div" className='lg:w-1/3 w-1/2 lg:h-min-[20em] lg:px-4 py-2 px-1 text-white inline-block'>
                <div className='bg-[#E56E39] text-center py-8'>
                  <FontAwesomeIcon icon={faImage} className="py-2 lg:text-7xl text-4xl"/>
                  <h2 className='px-8 py-1 font-[600] text-2xl'> Bucket Title</h2>
                  <p className='px-10 py-2 text-md font-thin'>Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
                    Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel.</p>
                  <div className='py-4'>
                     <button className='py-[0.5em] bg-transparent hover:bg-white hover:text-[#E56E39] px-8 border-white border-2 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                  </div>
                </div>
              </div>
              <div class="bucket-div" className='lg:w-1/3 h-min-[20em] lg:px-4 py-2 px-1 text-white'>
                <div className='bg-[#E56E39] text-center py-8'>
                  <FontAwesomeIcon icon={faImage} className="py-2 lg:text-7xl text-4xl"/>
                  <h2 className='px-8 py-1 font-[600] text-2xl'> Bucket Title</h2>
                  <p className='px-10 py-2 text-md font-thin'>Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
                    Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel.</p>
                  <div className='py-4'>
                     <button className='py-[0.5em] bg-transparent hover:bg-white hover:text-[#E56E39] px-8 border-white border-2 text-white font-extrabold lg:text-sm text-xs'> BUTTON </button>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
  
          <div class="content-section-three" className='min-h-[30em] w-full px-8 lg:px-28 py-8 bg-white'>
  
             <div class="content-section-three-top-half" className='lg:flex inline-block py-6'>
              <div class="left-three" className='lg:w-1/3 min-w-[20em] p-4 h-min-[20em]'>
                <div class="left-top-video" className='bg-[#007BAB] text-white m-auto py-24 max-w-lg'>
                  <div className='text-center text-5xl'>
                  <FontAwesomeIcon icon={faPlay}/>
                  </div>
                </div>
                <div class="left-bottom-text" className='py-4 text-center'>
                  <h3>H3 - Video Section Title</h3>
                </div>
              </div>
              <div class="right-three" className='lg:w-2/3 px-4'>
                <h2 className='py-4 text-[#003E50]'> H2 - 30 / 70 VIDEO BLOCK</h2>
                <p className='py-2 text-md font-thin'>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque. In hac habitasse platea dictumst.</p>
                <div className='py-4'>
                  <button className='py-[0.5em] bg-[#E56E39] border-[#E56E39] border-2 hover:bg-white hover:text-[#E56E39] px-8 text-white font-extrabold text-sm'> BUTTON </button>
                </div>
              </div>
            </div>
  
            <div class="section-three-break" className='flex py-8'>
              <div className='w-6/12 border-b-[.01em] border-[#003E50] opacity-20'></div>
              <FontAwesomeIcon icon={faModx} size="lg" className='text-[#003E50] -mb-2  px-2 opacity-20'/>
              <div className="w-6/12 border-b-[.01em] border-[#003E50] opacity-20"></div>
            </div>
  
            <div class="content-section-three-bottom-half" className='lg:flex inline-block lg:px-2 px-0 lg:py-10 py-4'>
              <div class="left-three" className='lg:w-1/2 px-4 py-4'>
                <h2 className='py-2 text-[#003E50]'> H2 - 50 / 50 IMAGE BLOCK</h2>
                <p className='py-2'>
                Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.                
                </p>
                <p className='py-2'>
                In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligu.
                </p>
              </div>
  
              <div class="right-three" className='lg:w-1/2 px-4 lg:py-8 py-4'>
                <div className='bg-[#003E50] lg:h-[23em] xl:w-[35em] md:w-[30em] w-[22em] h-[20em] resize-x text-center text-white m-auto'>
                <FontAwesomeIcon icon={faImage} className="text-8xl lg:py-[1.5em] py-[1em]"/>
                </div>
              </div>
  
            </div>
  
          </div>
  
          {/* Section 4 */}
          <div class="content-section-four" className='min-h-[30em] w-full px-8 lg:px-28 py-14 bg-[#007BAB] text-white lg:flex inline-block text-[.85em] md:text-[1em]'>
            <div class="four-left" className='lg:w-6/10 px-4 py-2' >
              <h2 className='py-2'> H2 - 60 / 40 BULLETED LIST </h2>
              <p className='py-2'>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.</p>
              <p className='py-2'>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.</p>
            </div>
  
            <div class="four-right" className='lg:w-4/10 px-4 py-2 max-w-lg'>
              <div class="block-container" className='bg-[#003E50] py-2 lg:px-20 px-10 m-auto'>
                <div class="list-container" className='lg:p-4'>
                  <h3 className='py-5 px-2 ' >H3 - Bulleted List Title</h3>
                  <ul className='bulleted-links'>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Maecenas ornare nisi</li>
                    <li>Quisque tincidunt ac eros</li>
                    <li>Vestibulum non risus fermentum</li>
                    <li>Lorrem Ipsum</li>
                    <li>Ipsum</li>
                    <li>Phasellus imperdiet</li>
                    <li>Aenean luctus nisl a magna</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div className='h-[0.6em] bg-[#E56E39]' >
          </div>
  
  
        </div>
        {/* END BODY */}

      </div>
    )
}

export default Home