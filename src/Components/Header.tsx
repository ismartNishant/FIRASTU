import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import ThemeBtn from "./ThemeBtn";
import logoblack from "../assets/logos/logo-black.svg";
import logowhite from '../assets/logos/logo-white.svg'
// import TopBar from "./TopBar";
// import useTheme from "../Context/Theme";
import { Menu, X } from 'lucide-react'

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    // const { themeMode, } = useTheme();
    const [isscrolled, setIsscrolled] = useState(false);

    const ChangeNav = () => {
        if (window.scrollY >= 100) {
            setIsscrolled(true)
        }
        else {
            setIsscrolled(false)
        }
    }

    window.addEventListener("scroll", ChangeNav)

    const [nav, setNav] = useState(false)
    const HanldeNav = () => {
        setNav(!nav)
    }

    const menuItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Upcoming',
            path: '/upcoming'
        },
        {
            name: 'Services',
            path: '/services'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ]

    return (
        <header className={`${isscrolled ? "bg-white w-full z-50 top-0 fixed shadow-md" : " bg-black/20 w-full z-50 top-0 fixed"}`} >
            <nav className=' border-gray-200 px-3 py-2 lg:px-6  '>
                <div className='flex  gap-3 items-center mx-auto max-w-screen-xl justify-between'>
                    <div className=''>
                        <NavLink to='/' className=''>
                            <img
                                className='w-72 sm:w-60'
                                src={isscrolled ? logoblack : logowhite}
                                alt='....logo....'
                            />
                        </NavLink>
                    </div>
                    <div className='lg:flex w-full justify-between items-center'>
                        <div className='hidden lg:flex  justify-center text-center mx-auto '>
                            <ol className=' flex  '>
                                {menuItems.map(item => (
                                    <NavLink
                                        key={item.name}
                                        className={({ isActive }) =>
                                            `${isActive
                                                ? `text-sec  bg-white rounded-sm ${isscrolled ? "underline underline-offset-8" : ""}`
                                                : `${isscrolled ? "text-black " : "text-white"}`
                                            }`
                                        }
                                        to={item.path}
                                    >
                                        <li className='nav-item text-[16px] font-medium'>{item.name} </li>
                                    </NavLink>
                                ))}
                            </ol>
                        </div>

                        <div className='hidden lg:block  gap-2'>
                            <NavLink
                                to='/'
                                className={`btn1 ${isscrolled ? "text-black" : "text-white"}`}
                            >
                                Book Now
                            </NavLink>
                        </div>
                    </div>

                    {/* hamburger icon */}
                    <div className='lg:hidden z-10' onClick={HanldeNav}>
                        {!nav ? (
                            <Menu
                                size={40}
                                className={`cursor-pointer hover:text-sec active:text-sec ${isscrolled ? "text-black" : "text-white"} `}
                            />
                        ) : (
                            <X
                                size={40}
                                className='hover:rotate-6  hover:text-sec  cursor-pointer '
                            />
                        )}
                    </div>

                    {/* mobile menu */}
                    <div
                        onClick={HanldeNav}
                        className={
                            nav
                                ? 'w-full overflow-y-hidden lg:hidden  absolute left-0 top-0  bg-white h-screen ease-linear duration-300'
                                : 'absolute top-0 left-[-100%] h-screen ease-linear duration-300'
                        }
                    >
                        <div className='h-full w-full text-center pt-12 '>
                            <ol>
                                {menuItems.map(item => (
                                    <NavLink
                                        key={item.name}
                                        className={({ isActive }) =>
                                            `${isActive ? 'text-sec' : 'text-black'}`
                                        }
                                        to={item.path}
                                    >
                                        <li className='nav-item text-[19px] font-medium '>{item.name} </li>
                                    </NavLink>
                                ))}
                            </ol>
                            <div className='gap-12 mt-8 '>
                                <NavLink
                                    to='/'
                                    className={`btn1 font-medium bg-gradient-to-r bg-pri from-sec rounded-sm text-black `}
                                >
                                    Book Now
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
