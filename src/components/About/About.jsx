import React, { useRef } from 'react'
import './About.scss'
import { motion, useInView } from 'framer-motion'

export default function About() {
    const ref = useRef();
    const InView = useInView(ref, { once: true })
    return <>
        <h1 className='font-bold text-4xl text-white text-center'>Services</h1>

        <div className='About flex flex-wrap justify-center items-center gap-10 py-28'>
            <motion.div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end 
             rounded-3xl" initial={{ opacity: 0, y: 30 }} animate={InView && { opacity: 1, y: 0 }} transition={{
                    duration: 0.8,
                    ease: "easeInOut", delay: 0
                }} ref={ref}>
                <p className='relative top-9 font-bold text-lg text-white'>Event Security</p>
            </motion.div>
            <motion.div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end rounded-3xl"
                initial={{ opacity: 0, y: 30 }} animate={InView && { opacity: 1, y: 0 }} transition={{
                    duration: 0.8, ease: "easeInOut",
                    delay: 0.2
                }}>
                <p className='relative top-9 font-bold text-lg text-white'>Residential Security</p>
            </motion.div>
            <motion.div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end rounded-3xl"
                initial={{ opacity: 0, y: 30 }} animate={InView && { opacity: 1, y: 0 }} transition={{
                    duration: 0.8, ease: "easeInOut",
                    delay: 0.7
                }}>
                <p className='relative top-9 font-bold text-lg text-white'>Corporate Security</p>
            </motion.div>
            <motion.div className="Service_Card w-[300px] h-[250px] bg-white flex justify-center items-end rounded-3xl"
                initial={{ opacity: 0, y: 30 }} animate={InView && { opacity: 1, y: 0 }} transition={{
                    duration: 0.8, ease: "easeInOut",
                    delay: 1.2
                }}>
                <p className='relative top-9 font-bold text-lg text-white'>Personal Protection</p>
            </motion.div>
        </div>
    </>
}
