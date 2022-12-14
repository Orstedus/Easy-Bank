import React from 'react'
import {motion} from 'framer-motion'

const NavBlock = ({nav}) => {
  return (
    <motion.div animate={{height:nav}} transition={{duration:0.5}} className='navBlockMobile'>
      <div className='navBox'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Block</p>
        <p>Careers</p>
      </div>
    </motion.div>
  )
}

export default NavBlock