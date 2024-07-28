import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-lg font-bold uppercase text-white">Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-1">
                            <li className="">
                                <p className=" hover:underline">Home</p>
                            </li>
                            <li className="">
                                <p className=" hover:underline">About</p>
                            </li>
                            <li className="">
                                <p className="hover:underline">Service</p>
                            </li>
                            <li className="">
                                <p className="hover:underline">Portfolio</p>
                            </li>
                            <li className="">
                                <p className="hover:underline">Apply</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-bold uppercase text-white">Help center</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <p className="hover:underline">Discord Server</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">Twitter</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">Facebook</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">Contact Us</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-bold uppercase text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <p className="hover:underline">Privacy Policy</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">Licensing</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">Terms &amp; Conditions</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-bold uppercase text-white">Download</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <p className="hover:underline">iOS</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">Android</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">Windows</p>
                            </li>
                            <li className="mb-4">
                                <p className="hover:underline">MacOS</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
