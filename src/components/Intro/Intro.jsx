import React from 'react'
import './Intro.scss'
// import IntroImage from '../../Assets/intro.jpg'
import IntroImage from '../../Assets/intro2.jpg'
import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <div className='Intro flex flex-wrap  items-center'>
            <motion.article className="format lg:format-lg mt-10 px-4" initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "tween" }}>
                <h1>Pro 85 guard</h1>
                <p className="lead">Welcome to Pro 85 guard, where safety and security are our top priorities.
                    Our highly trained and dedicated team of professionals provides reliable and efficient security
                    services tailored to meet your unique needs. Trust us to protect what matters most, giving you
                    peace of mind around the clock.</p>
            </motion.article>
            <motion.img src={IntroImage} alt="..." loading='lazy' initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, type: "tween", delay: 0.6 }} />
        </div>
    )
}
