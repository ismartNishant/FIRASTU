import type { FC } from 'react';
import BannerSec from './AboutComponents/BannerSec';
import { NavLink } from 'react-router-dom';
import { backpack, Boot, camperVan, hikingGuide, kayaking, trail } from './Imports';

interface ServicesProps { }

const Services: FC<ServicesProps> = () => {
    return (

        <div className='services'>
            <BannerSec Route="Services" />

            <div className='max-w-screen-xl mx-auto  py-10 px-4 relative'>
                <h1 className='text-3xl md:text-4xl font-baloo font-bold text-center mb-5'>What we offer</h1>
                <div className='services-items flex flex-row flex-wrap gap-5 w-full'>
                    <div className='text-center border-4 border-zinc-800 w-96 p-4'>
                        <div className=''>
                            <img src={backpack} className='w-28 h-28 m-auto' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-sec text-xl font-medium my-1'>Complete Guide</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        <div className='flex justify-center  items-center pt-5'>
                            <NavLink to='/' className='btn4 border-[3px] px-4 py-2 font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                    <div className='text-center border-4 border-zinc-800 w-96 p-4'>
                        <div className=''>
                            <img src={Boot} className='w-28 h-28 m-auto' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-sec text-xl font-medium my-1'>Coustom Packages</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        <div className='flex justify-center  items-center pt-5'>
                            <NavLink to='/' className='btn4 border-[3px] px-4 py-2 font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                    <div className='text-center border-4 border-zinc-800 w-96 p-4'>
                        <div className=''>
                            <img src={hikingGuide} className='w-28 h-28 m-auto' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-sec text-xl font-medium my-1'>Train guides</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        <div className='flex justify-center  items-center pt-5'>
                            <NavLink to='/' className='btn4 border-[3px] px-4 py-2 font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                    <div className='text-center border-4 border-zinc-800 w-96 p-4'>
                        <div className=''>
                            <img src={camperVan} className='w-28 h-28 m-auto' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-sec text-xl font-medium my-1'>Family Trips</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        <div className='flex justify-center  items-center pt-5'>
                            <NavLink to='/' className='btn4 border-[3px] px-4 py-2 font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                    <div className='text-center border-4 border-zinc-800 w-96 p-4'>
                        <div className=''>
                            <img src={trail} className='w-28 h-28 m-auto' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-sec text-xl font-medium my-1'>Adventure Trail</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        <div className='flex justify-center  items-center pt-5'>
                            <NavLink to='/' className='btn4 border-[3px] px-4 py-2 font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                    <div className='text-center border-4 border-zinc-800 w-96 p-4'>
                        <div className=''>
                            <img src={kayaking} className='w-28 h-28 m-auto' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-sec text-xl font-medium my-1'>Various Adventures</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        <div className='flex justify-center  items-center pt-5'>
                            <NavLink to='/' className='btn4 border-[3px] px-4 py-2 font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
