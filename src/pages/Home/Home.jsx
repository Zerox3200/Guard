import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Intro from '../../components/Intro/Intro'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Events from '../../Assets/IMG-20240728-WA0008.jpg'
import Resiential from '../../Assets/IMG-20240728-WA0015.jpg'
import Coprate from '../../Assets/IMG-20240728-WA0012.jpg'
import Personal from '../../Assets/IMG-20240728-WA0009.jpg'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return <>
        {isLoading ? <Loader /> : <div className='min-h-screen bg-gradient-to-tr from-black to-white'>
            <Nav />
            <Intro />
            <About />
            <Services loc={1} img={Events} Title={"Event Security"} />
            <Services loc={2} img={Resiential} Title={"Residential Security"} />
            <Services loc={1} img={Coprate} Title={"Corporate Security"} />
            <Services loc={2} img={Personal} Title={"Personal Protection"} />
            <Footer />
        </div>
        }

    </>
}
