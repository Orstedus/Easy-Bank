import React from 'react'
import '../styles/style.scss'
import logo from '../images/logo.svg'
import cross from '../images/icon-close.svg'
import hamburger from '../images/icon-hamburger.svg'

export const Header = ({nav, func}) => {
  return (
    <div className='header'>
        <img src={logo} className='logoImg'/>
        <div className='navBlock'>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Block</a>
          <a>Careers</a>
        </div>
        {!nav
        ?<img className='navIcon' src={hamburger} onClick={()=>func(400)}/>
        :<img className='navIcon' src={cross} onClick={()=>func(0)}/>
        }
        <button>Request Invite</button>
    </div>
  )
}