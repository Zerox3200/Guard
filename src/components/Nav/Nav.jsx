import React, { useState } from 'react'
import Logo from '../../Assets/Logo.png'
import './Nave.scss'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return <nav className="fixed z-10 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
            <img src={Logo} alt="Logo" width={"80px"} height={"80px"} />
            <button data-collapse-toggle="navbar-default" type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                onClick={toggleMenu}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
                  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                        <p className="block py-2 px-3 rounded  md:p-0 cursor-pointer" aria-current="page">Home</p>
                    </li>
                    <li>
                        <p className="block py-2 px-3 rounded  md:p-0 cursor-pointer" aria-current="page">About us</p>
                    </li>
                    <li>
                        <p className="block py-2 px-3  rounded  md:p-0 cursor-pointer" aria-current="page">Service</p>
                    </li>
                    <li>
                        <p className="block py-2 px-3rounded 
                          md:p-0 cursor-pointer" aria-current="page">Protfolio</p>
                    </li>
                    <li>
                        <p className="block py-2 px-3 rounded 
                          md:p-0 cursor-pointer" aria-current="page">Apply</p>
                    </li>
                </ul>
            </div>
        </div>

    </nav>

}