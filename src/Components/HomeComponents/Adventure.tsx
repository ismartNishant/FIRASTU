import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { trek1, camp1, turf2, kayaking1, offbeattrek2, cycling1 } from '../Imports';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AdventureProps { }

const Adventure: FC<AdventureProps> = () => {
    const settings = {
        dots: false,
        infinite: true,
        // autoplay: true,
         // autoplaySpeed: 2000,
        // cssEase: "linear",
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h1 className='text-3xl md:text-4xl font-baloo font-bold text-center '>Adventure Activities</h1>

            <div className="slider-container mx-auto relative ">
                <Slider {...settings} className='mx-auto flex flex-row justify-center items-center py-16 gap-8 '>
                    <div className='flex flex-col   h-[450px] justify-between  rounded-xl  activity  '>
                        <img className='h-56 w-full mx-auto  object-cover  rounded-t-xl    ' src={trek1} />
                        <div className='text-center py-4 px-2 bg-sky-100  '>
                            <div>
                                <h1 className='text-2xl text-sec font-semibold font-baloo my-1'>Trekking</h1>
                                <p className='text-sm my-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                            </div>
                            <div className='flex justify-center  items-center pt-10'>
                                <NavLink to='/' className='btn3 text-white font-semibold'>
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col   h-[450px] justify-between  rounded-xl  activity  '>
                        <img className='h-56 w-full mx-auto  object-cover  rounded-t-xl ' src={camp1} />
                        <div className='text-center py-4 px-2 bg-sky-100 '>
                            <div>
                                <h1 className='text-2xl text-sec font-semibold font-baloo my-1'>Camping</h1>
                                <p className='text-sm my-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                            </div>

                            <div className='flex justify-center  items-center pt-10'>
                                <NavLink to='/' className='btn3 text-white font-semibold'>
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col   h-[450px] justify-between  rounded-xl  activity   '>
                        <img className='h-56 w-full mx-auto  object-cover  rounded-t-xl ' src={turf2} />
                        <div className='text-center py-4 px-2 bg-sky-100 '>
                            <div>
                                <h1 className='text-2xl text-sec font-semibold font-baloo my-1'>Turf Activities</h1>
                                <p className='text-sm my-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                            </div>
                            <div className='flex justify-center  items-center pt-10'>
                                <NavLink to='/' className='btn3 text-white font-semibold'>
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col   h-[450px] justify-between  rounded-xl  activity  '>
                        <img className='h-56 w-full mx-auto  object-cover  rounded-t-xl ' src={kayaking1} />
                        <div className='text-center py-4 px-2 bg-sky-100 '>
                            <div>
                                <h1 className='text-2xl text-sec font-semibold font-baloo my-1'>Kayaking</h1>
                                <p className='text-sm my-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                            </div>

                            <div className='flex justify-center  items-center pt-10'>
                                <NavLink to='/' className='btn3 text-white font-semibold'>
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col   h-[450px] justify-between  rounded-xl  activity  '>
                        <img className='h-56 w-full mx-auto  object-cover  rounded-t-xl ' src={offbeattrek2} />
                        <div className='text-center py-4 px-2 bg-sky-100 '>
                            <div>
                                <h1 className='text-2xl text-sec font-semibold font-baloo my-1'>Offbeat Treks</h1>
                                <p className='text-sm my-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                            </div>
                            <div className='flex justify-center  items-center pt-10'>
                                <NavLink to='/' className='btn3 text-white font-semibold'>
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col   h-[450px] justify-between  rounded-xl  activity  '>
                        <img className='h-56 w-full mx-auto  object-cover  rounded-t-xl ' src={cycling1} />
                        <div className='text-center py-4 px-2 bg-sky-100   '>
                            <div>
                                <h1 className='text-2xl text-sec font-semibold font-baloo my-1'>Cycling</h1>
                                <p className='text-sm my-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                            </div>
                            <div className='flex justify-center  items-center pt-10'>
                                <NavLink to='/' className='btn3 text-white font-semibold'>
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Adventure;
