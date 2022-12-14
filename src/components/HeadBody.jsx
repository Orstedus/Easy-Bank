import React from 'react'
import bg from '../images/bg-intro-desktop.svg'
import mp from '../images/image-mockups.png'

const HeadBody = () => {
  return (
    <div className='headBody'>
      <div className='texts'>
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online. 
             Your Easybank account will be a one-stop-shop
             for spending, saving, budgeling, investing, 
             and much more.
          </p>
          <button>Request Invite</button>
        </div>
        <div className='imgs'>
          <img src={bg} className='bgImg'/>
          <img src={mp} className='mpImg'/>
        </div>
    </div>
  )
}

export default HeadBody