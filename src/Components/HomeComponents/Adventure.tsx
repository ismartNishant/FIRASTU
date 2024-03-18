import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { trek1, camp1, turf2, kayaking1, offbeattrek2, cycling1 } from '../Imports';

interface AdventureProps { }

const Adventure: FC<AdventureProps> = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl font-baloo font-bold text-center '>Adventure Activities</h1>

            <div className='flex justify-center flex-wrap gap-5 py-10'>
                <div className='flex flex-col w-96 justify-between  '>
                    <img className='h-56 w-full mx-auto  object-cover rounded-md' src={trek1} />
                    <div className='text-center'>
                        <h1 className='text-2xl text-sec font-semibold font-baloo my-3'>Trekking</h1>
                        <p className='text-sm my-3' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                        <div className='flex justify-center items-center mt-5'>
                            <NavLink to='/' className='btn3 text-white font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 justify-between  '>
                    <img className='h-56 w-full mx-auto  object-cover rounded-md' src={camp1} />
                    <div className='text-center'>
                        <h1 className='text-2xl text-sec font-semibold font-baloo my-3'>Camping</h1>
                        <p className='text-sm my-3' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                        <div className='flex justify-center items-center mt-5'>
                            <NavLink to='/' className='btn3 text-white font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 justify-between  '>
                    <img className='h-56 w-full mx-auto  object-cover rounded-md' src={turf2} />
                    <div className='text-center'>
                        <h1 className='text-2xl text-sec font-semibold font-baloo my-3'>Turf Activities</h1>
                        <p className='text-sm my-3' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                        <div className='flex justify-center items-center mt-5'>
                            <NavLink to='/' className='btn3 text-white font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 justify-between  '>
                    <img className='h-56 w-full mx-auto  object-cover rounded-md' src={kayaking1} />
                    <div className='text-center'>
                        <h1 className='text-2xl text-sec font-semibold font-baloo my-3'>Kayaking</h1>
                        <p className='text-sm my-3' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                        <div className='flex justify-center items-center mt-5'>
                            <NavLink to='/' className='btn3 text-white font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 justify-between  '>
                    <img className='h-56 w-full mx-auto  object-cover rounded-md' src={offbeattrek2} />
                    <div className='text-center'>
                        <h1 className='text-2xl text-sec font-semibold font-baloo my-3'>Offbeat Treks</h1>
                        <p className='text-sm my-3' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                        <div className='flex justify-center items-center mt-5'>
                            <NavLink to='/' className='btn3 text-white font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 justify-between  '>
                    <img className='h-56 w-full mx-auto  object-cover rounded-md' src={cycling1} />
                    <div className='text-center'>
                        <h1 className='text-2xl text-sec font-semibold font-baloo my-3'>Cycling</h1>
                        <p className='text-sm my-3' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur</p>
                        <div className='flex justify-center items-center mt-5'>
                            <NavLink to='/' className='btn3 text-white font-semibold'>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adventure;
