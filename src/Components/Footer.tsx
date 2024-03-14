import {  NavLink } from 'react-router-dom';
import logoblack from "../assets/logos/logo-black.svg";
import logowhite from "../assets/logos/logo-white.svg"
import useTheme from '../Context/Theme';
import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
    const { themeMode, } = useTheme();

    return (
        <footer className="bg-white border-y dark:border-0 dark:dark:bg-zinc-900  dark:text-white  ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 w-full sm:w-96 bg-red">
                        <NavLink to="/" className="">
                            <img className="w-56 sm:w-60" src={themeMode === 'light' ? logoblack : logowhite} alt="....logo...." />
                        </NavLink>
                        <p className='mt-3 text-sm text-gray-500'>Our travel company specializes in adrenaline-pumping treks and exhilarating adventure activities, 
                        offering unforgettable experiences in some of the world's most breathtaking destinations. With a passion for exploration and a commitment 
                        to safety and sustainability, we strive to create transformative journeys that leave a lasting impact on both travelers and the communities we visit.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200">Resources</h2>
                            <ul className="text-gray-500 font-medium dark:text-gray-400">

                                <li className="mb-4 ">
                                    <NavLink to="/">  Home</NavLink>
                                </li>
                                <li className='mb-4'>
                                    <NavLink to="/about"> About </NavLink>
                                </li>
                                <li className='mb-4'>
                                    <NavLink to="/contact"> contact </NavLink>
                                </li>
                                <li className='mb-4'>
                                    <NavLink to="/upcoming"> Upcoming </NavLink>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200">Follow us</h2>
                            <ul className="text-gray-500 font-medium dark:text-gray-400">
                                <li className="mb-4">
                                    <NavLink to="/">
                                        Github
                                    </NavLink>
                                </li>
                                <li >
                                    <NavLink to="/">
                                        Discord
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium dark:text-gray-400">
                                <NavLink to="/" >
                                    <li className="mb-4 ">
                                        Privacy Policy
                                    </li>
                                </NavLink>
                                <NavLink to="/" >
                                    <li >
                                        Terms &amp; Conditions
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200  sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <NavLink to="/" className="hover:underline px-1 text-sec font-semibold">
                            Firastu.com
                        </NavLink>
                         All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <NavLink to="" className="text-gray-500 hover:text-sky-400">
                            <BsFacebook size={23} />
                        </NavLink>
                        <NavLink to="" className="text-gray-500 hover:text-sky-400">
                            <BsInstagram size={20} />
                        </NavLink>
                        <NavLink to="" className="text-gray-500 hover:text-sky-400">
                            <BsTwitterX size={20} />
                        </NavLink>
                        <NavLink to="" className="text-gray-500 hover:text-sky-400">
                            <BsWhatsapp size={20} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}