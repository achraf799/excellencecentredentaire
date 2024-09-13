import React from 'react'
import { motion } from 'framer-motion'
function Wave() {
  return (
    <div className='absolute bottom-[5%] -left-[20%] '>
    <svg width="545" height="306" viewBox="0 0 545 306" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path initial={{
      pathLength:0,
      pathOffset:1,
      strokeWidth:6
  }} animate={{pathLength:1,pathOffset:0}} transition={{duration:1,delay:4}}  d="M4 224.151C10.9857 260.88 64.5956 326.044 223.15 292.87C381.705 259.695 515.949 166.885 563.252 124.627C597.182 96.3894 669.234 32.331 686 2" stroke="url(#paint0_linear_78_145)" stroke-width="10"/>
    <defs>
    <linearGradient id="paint0_linear_78_145" x1="597.981" y1="-49.539" x2="16.8451" y2="164.165" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2977D5"/>
    <stop offset="0.40625" stop-color="#2977D5" stop-opacity="0.59375"/>
    <stop offset="0.776042" stop-color="#2977D5" stop-opacity="0.333333"/>
    <stop offset="1" stop-color="#2977D5" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
    </div>
    
    
  )
}

export default Wave