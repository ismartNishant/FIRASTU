import { FC } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Keyboard, Pagination, A11y, } from 'swiper/modules';
import { NavLink, } from 'react-router-dom';
import { camp1, cycling1, kayaking1, offbeattrek2, trek1, turf2 } from '../Imports';


interface Adventure_ideaProps { }

const Adventure_idea: FC<Adventure_ideaProps> = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl font-baloo font-bold text-center '>Adventure Activities</h1>
            <div className='my-7'>
                <Swiper

                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    keyboard={true}
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}

                    modules={[Pagination, A11y, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide className=' '>
                        <div className='flex flex-col justify-between  '>
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
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col justify-between  '>
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
                    </SwiperSlide>
                    <SwiperSlide className=' '>
                        <div className='flex flex-col justify-between  '>
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
                    </SwiperSlide>
                    <SwiperSlide className=' '>
                        <div className='flex flex-col justify-between  '>
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
                    </SwiperSlide>
                    <SwiperSlide className=' '>
                        <div className='flex flex-col justify-between  '>
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
                    </SwiperSlide>
                    <SwiperSlide className=' '>
                        <div className='flex flex-col justify-between  '>
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
                    </SwiperSlide>
                   

                </Swiper>
            </div>
        </div>
    );
}

export default Adventure_idea;
