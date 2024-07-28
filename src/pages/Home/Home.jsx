import React from 'react'
import Nav from '../../components/Nav/Nav'
import Intro from '../../components/Intro/Intro'
import About from '../../components/About/About'

export default function Home() {
    return <div className='min-h-screen bg-gradient-to-tr from-black to-white'>
        <Nav />
        <Intro />
        <About />
    </div>
}
