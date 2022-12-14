import React from 'react'

import cardImg from '../images/icon-online.svg'
import phoneImg from '../images/icon-budgeting.svg'
import socialImg from '../images/icon-onboarding.svg'
import procImg from '../images/icon-api.svg'

import curPost from '../images/image-currency.jpg'
import restPost from '../images/image-restaurant.jpg'
import planePost from '../images/image-plane.jpg'
import confPost from '../images/image-confetti.jpg'

const Body = () => {

    const blocks = [
        [1, cardImg, 'Online Banking', 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'],
        [2, phoneImg, 'Simple Budgeting', 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'],
        [3, socialImg, 'Fast Onboarding', 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'],
        [4, procImg, 'Open API', 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'],
    ]

    const posts = [
        [1, curPost, 'Receive money in any currency with no fees', 'Claire Robinson', 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'],
        [2, restPost, 'Treat yourself without worrying about money', 'Wilson Hutton', 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'],
        [3, planePost, 'Take your Easybank card wherever you go', 'Wilson Hutton', 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'],
        [4, confPost, 'Our invite-only Beta accounts are now live!', 'Claire Robinson', 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'],
        
    ]

  return (

    <div className="Body">
        <div className='rec'>
            <h1>Why choose Easybank?</h1>
            <p>
                We leverage Open Banking to turn 
                your bank account into your financial hub. Control 
                your finances like never before.
            </p>
        </div>
        <div className='options'>
                {blocks.map(block=>
                    <div className='block' key={block[0]}>
                        <img src={block[1]} alt='block'/>
                        <h1>{block[2]}</h1>
                        <p>{block[3]}</p>
                    </div>
                )

                }

            </div>
        <div className='articles'>
            <h1>Latest articles</h1>
            <div className='posts'>
                {posts.map(post=>
                    <div className='post' key={post[0]}>
                        <img src={post[1]} alt='post'/>
                        <div className='textbox'>
                            <p>By {post[3]}</p>
                            <h2>{post[2]}</h2>
                            <h3>{post[4]}</h3>
                        </div>
                    </div>
                )

                }
            </div>
        </div>
    </div>
  )
}

export default Body