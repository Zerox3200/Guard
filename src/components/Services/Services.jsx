import React, { useRef } from 'react'
import './Services.scss'
import { motion, useInView } from 'framer-motion'

export default function Services({ img, loc, Title, delay }) {
    const ref = useRef();
    const InView = useInView(ref, { once: true })
    return (
        <div className='Services bg-black px-5 py-10'  >
            <div className="flex flex-wrap justify-evenly items-center gap-7 " ref={ref}>
                <motion.img src={img} alt="..." loading='lazy' className={`object-cover ${loc === 1 ? "order-1" : "order-2"}`}
                    initial={{ opacity: 0, y: 50 }} animate={InView && { opacity: 1, y: 0 }} transition={{ duration: 1.5, type: "tween" }} />
                <article className={`format lg:format-lg dark:format-invert ${loc === 1 ? "order-2" : "order-1"}`}>
                    <h1 className='text-[#ffffffa8]'>{Title}</h1>
                    <p>Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
                    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
                    <ol>
                        <li><strong className='text-[#ffffffa8]'>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
                        <li><strong className='text-[#ffffffa8]'>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
                    </ol>
                </article>
            </div>
        </div>
    )
}
