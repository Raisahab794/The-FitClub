import React from 'react'

import './Hero.css'
import Header from './Header'
import hero_image from '../assets/hero_image.png';

import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from"../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {
  const transition={type:'spring',duration:3}
const mobile=window.innerWidth<=768?true:false;
  return (
     <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
         <div className='left-h'>
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                 initial={{left:mobile?'168px':'238px'}}
                 whileInView={{left:'8px'}}
                 transition={{...transition, type:'linear'}}
                ></motion.div>
                <span>The best fitness club in the town</span>
            </div>
            <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span> Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
           <div>
            <span> 
            In here we will help you to shape and build ideal body and live up your life to fullest
            </span>
           
           </div>
         </div>
          {/* figure  */}
           <div className="figures">
            <div>
                <span>
                  <NumberCounter end={100} start={50} delay='2' preFix='+' />
                </span>
                <span>Expert Coachs</span>
             </div>
            <div>
                <span>
                  <NumberCounter end={1000} start={950} delay='2' preFix='+' />
                </span>
                <span>Members</span>
             </div>
            <div>
                <span>
                  <NumberCounter end={50} start={0} delay='2' preFix='+' />
                </span>
                <span>Fitness Programs</span>
             </div>
            
           </div>
           {/* hero button */}
             <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
             </div>
      </div> 
      <div className='right-h'>
        <button className="btn">Join Us</button>    


          <motion.div 
          initial={{right:'-1rem'}}
          whileInView={{right:'4rem'}}
          transition={{...transition}}

          className="heart-rate">
            <img src={Heart} alt="heart" />
            <span>Heart Rate</span>
            <span>120 bpm</span>
          </motion.div>
          {/* hero images */}
         <img src={hero_image} alt="hero_image" className="hero-image" />
            <motion.img
            initial={{right:'17rem'}}
            whileInView={{right:'23rem'}}
            transition={{...transition}}
            src={hero_image_back} alt="hero_image_back" className="hero-image-back" />
            {/* Calories */}
            <motion.div 
            initial={{right:'30rem'}}
            whileInView={{right:'37rem'}}
            transition={{...transition}}
            className="calories">
                <img src={Calories} alt="calories" />
               <div> 
                  <span>Calories Burned</span>
                  <span>500 kcal</span>
                </div>
            </motion.div>    
        </div>
     </div>
  )
}

export default Hero
