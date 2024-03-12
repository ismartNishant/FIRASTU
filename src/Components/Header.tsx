import {CgClose} from "react-icons/cg";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";
import logoblack from "../assets/logo-black.svg";
import logowhite from "../assets/logo-white.svg"
import TopBar from "./TopBar";
import useTheme from "../Context/Theme";



const Header = () => {
    const { themeMode, } = useTheme();

    const [nav,
        setNav] = useState(false);
    const HanldeNav = () => {
        setNav(!nav);
    };

    const menuItems = [
        {
            name: "Home",
            path: "/"
        }, {
            name: "About",
            path: "/about"
        }, {
            name: "Upcoming",
            path: "/upcoming"
        }, {
            name: "Gallery",
            path: "/gallery"
        }, {
            name: "Contact",
            path: "/contact"
        }
    ];

    return (
        <header className="shadow sticky z-50 top-0">
          <TopBar />
            <nav
                className="bg-white border-gray-200 px-4 lg:px-6 py-2  dark:bg-zinc-900 dark:text-white">
                <div
                    className="flex  gap-3  items-center mx-auto max-w-screen-xl justify-between">
                    <div>
                        <NavLink to="/" className="text-2xl logo flex items-center">
                            <img src={themeMode === 'light' ? logoblack : logowhite} alt="....logo...."/>
                        </NavLink>
                    </div>
                    <div className="lg:flex w-full justify-between">
                        <div className="hidden lg:flex  justify-center text-center mx-auto ">
                            <ol className=" flex  ">
                                {menuItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        className={({isActive}) => `${isActive
                                        ? "text-sec"
                                        : "text-black dark:text-white"}`}
                                        to={item.path}>
                                        <li className="nav-item text-[16px] font-medium">
                                            {item.name}{" "}
                                        </li>
                                    </NavLink>
                                ))}
                            </ol>
                        </div>

                        <div className="hidden lg:flex  items-center  gap-2">
                            <NavLink
                                to="/"
                                className={`btn font-medium bg-gradient-to-r  bg-pri  from-sec rounded-sm  text-black `}>
                                Book Now
                            </NavLink>
                            <div>
                                <ThemeBtn/>
                            </div>
                        </div>
                    </div>

                    {/* hamburger icon */}
                    <div className="lg:hidden z-10" onClick={HanldeNav}>
                        {!nav
                            ? (<FaBars
                                size={30}
                                className="cursor-pointer hover:text-sec active:text-sec dark:text-white"/>)
                            : (<CgClose
                                size={30}
                                className="hover:rotate-6  hover:text-sec  cursor-pointer dark:text-white "/>)}
                    </div>

                    {/* mobile menu */}
                    <div
                        onClick={HanldeNav}
                        className={nav
                        ? "w-full overflow-y-hidden lg:hidden ease-in duration-300 absolute left-0 top-0 h-" +
                            "screen dark:bg-zinc-900 dark:text-white bg-white px-4 py-7"
                        : "absolute top-0 left-[-100%] h-screen ease-in duration-500"}>
                        <div className="h-full w-full text-center pt-12 ">
                            <ol>
                                {menuItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        className={({isActive}) => `${isActive
                                        ? "text-sec"
                                        : "text-black dark:text-white"}`}
                                        to={item.path}>
                                        <li className="nav-item text-[16px] font-medium">
                                            {item.name}{" "}
                                        </li>
                                    </NavLink>
                                ))}
                            </ol>
                            <div className="gap-12 mt-8 flex flex-col justify-center items-center">
                                <NavLink
                                    to="/"
                                    className={`btn font-medium bg-gradient-to-r bg-pri from-sec rounded-sm text-black dark:text-white`}>
                                    Book Now
                                </NavLink>
                                <div>
                                    <ThemeBtn/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
