import {  NavLink } from 'react-router-dom';
import logoblack from "../assets/logos/logo-black.svg";
// import logowhite from "../assets/logos/logo-white.svg"
// import useTheme from '../Context/Theme';
import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
    // const { themeMode, } = useTheme();

    return (
        <footer className="bg-white border-y  ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:justify-between flex-wrap">
                    <div className="mb-6 md:mb-0 sm:max-w-full lg:max-w-sm  max-w-screen-sm bg-red">
                        <NavLink to="/" className="">
                            <img className=" w-40 sm:w-60" src={ logoblack } alt="....logo...." />
                        </NavLink>
                        <p className=' my-3 sm:my-5 sm:text-[12px] text-gray-500 text-[12px]'>Our travel company specializes in adrenaline-pumping treks and exhilarating adventure activities, 
                        offering unforgettable experiences in some of the world's most breathtaking destinations. With a passion for exploration and a commitment 
                        to safety and sustainability, we strive to create transformative journeys that leave a lasting impact on both travelers and the communities we visit.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
                        <div>
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                            <ul className="text-gray-500 font-medium ">

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
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                            <ul className="text-gray-500 font-medium ">
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
                            <h2 className="mb-5 text-sm font-semibold text-gray-900  uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium ">
                                <NavLink to="/" >
                                    <li className="mb-4 ">
                                        Privacy Policy
                                    </li>
                                </NavLink>
                                <NavLink to="/" >
                                    <li >
                                        Terms &amp;  Conditions
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200  sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500 text-center sm:text-start">
                        © 2024
                        <NavLink to="/" className="hover:underline px-1 text-sec font-semibold">
                            Firastu.com
                        </NavLink>
                         All Rights Reserved.
                    </p>
                    <div className="flex mt-4 space-x-5 justify-center sm:mt-0">
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