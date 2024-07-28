import React from 'react'
import './Intro.scss'
import IntroImage from '../../Assets/portrait-male-security-guard-with-radio-station.jpg'

export default function Intro() {
    return (
        <div className='Intro flex flex-wrap justify-evenly items-center'>
            <article className="format lg:format-lg mt-10 px-4">
                <h1>Pro 85 guard</h1>
                <p className="lead">Welcome to Pro 85 guard, where safety and security are our top priorities.
                    Our highly trained and dedicated team of professionals provides reliable and efficient security
                    services tailored to meet your unique needs. Trust us to protect what matters most, giving you
                    peace of mind around the clock.</p>
            </article>
            <img src={IntroImage} alt="..." loading='lazy' />
        </div>
    )
}
