import React from 'react'
import { useState } from 'react'
import './Testimonials.css'
import {testimonialsData}from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Testimonials = () => {
  const transition={type:'spring',duration:3}
  const [selected, setSelected] = useState(0)
  const tLength= testimonialsData.length
  return (
    <div className="Testimonials" id='testimonials'>
    <div className="left-t">
      <span>Testimonials</span>
      <span className='stroke-text'>What they</span>
      <span>say about us</span>
      <motion.span
      key={selected}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={{...transition,duration:1}}
        >{testimonialsData[selected].review}
      </motion.span>
      <span>
        <span style={{color:'var(--orange)'}}> 
        {testimonialsData[selected].name}
        </span>{" "}
        -{testimonialsData[selected].status}
      </span>
    </div>
    <div className="right-t">
      <motion.div
          initial={{opacity:0, x:-100}}
          transition={{...transition,duration:2}}
        whileInView={{opacity:1, x:0}}
      ></motion.div>
      <motion.div
          initial={{opacity:0, x:100}}
          transition={{...transition,duration:2}}
        whileInView={{opacity:1, x:0}}
      ></motion.div>
      <motion.img
      key={selected}
      initial={{opacity:0, x:100}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:100}}
      transition={{...transition,duration:1}}
      src={testimonialsData[selected].image} alt="" />
      <div className="arrows">
        <img 
         onClick={()=>setSelected(selected===0?tLength-1:selected-1)}
        src={leftArrow} alt="" />
        <img 
        onClick={()=>setSelected(selected===tLength-1?0:selected+1)}
        src={rightArrow} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Testimonials