import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaGooglePlusG,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const TopBar = () => {

    return (
        <div className="flex items-center justify-between px-4 py-1 bg-gradient-to-r from-sec to-pri  text-black ">
            <div>
                <ul className="flex gap-4 text-white">
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaFacebook size={25}  />
                        </a>
                    </li>
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaTwitter size={25} />
                        </a>
                    </li>
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaInstagram size={25} />
                        </a>
                    </li>
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaGooglePlusG size={25} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center ">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={20} className="mr-2 " ></AiOutlineClockCircle>
                    <p className=" text-sm">9AM -5PM</p>
                </div>
                <div className="hidden md:flex items-center px-6">
                    <AiFillPhone size={20} className="mr-2 "></AiFillPhone>
                    <p className=" text-sm">+91 7218566898</p>
                </div>
                <NavLink
                    to="/"
                    className="px-3 py-[5px] font-medium text-[14px]  border-[3px] border-black text-black hover:bg-black hover:text-pri">
                    Get A free Quote
                </NavLink>

            </div>
        </div>
    )
}

export default TopBar