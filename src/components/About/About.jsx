import React from 'react'
import './About.scss'

export default function About() {
    return <>
        <h1 className='font-bold text-4xl text-white text-center'>Services</h1>

        <div className='About flex flex-wrap justify-center items-center gap-10'>
            <div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end">
                <p className='relative top-9 font-bold text-lg text-white'>Event Security</p>
            </div>
            <div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end">
                <p className='relative top-9 font-bold text-lg text-white'>Residential Security</p>
            </div>
            <div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end">
                <p className='relative top-9 font-bold text-lg text-white'>Corporate Security</p>
            </div>
            <div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end">
                <p className='relative top-9 font-bold text-lg text-white'>Personal Protection</p>
            </div>
        </div>
    </>
}
