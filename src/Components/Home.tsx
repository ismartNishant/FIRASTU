import { FC, useEffect } from 'react';
import { BsFacebook, BsTwitterX, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import v1 from '../assets/videos/v1.mp4';
import v2 from '../assets/videos/v2.mp4';
import v6 from '../assets/videos/v6.mp4';
import v4 from '../assets/videos/v4.mp4';
import v5 from '../assets/videos/v5.mp4';

const Home: FC = () => {
    useEffect(() => {
        const btns = document.querySelectorAll<HTMLDivElement>('.nav-btn');
        const contents = document.querySelectorAll<HTMLDivElement>('.content');

        const slides = document.querySelectorAll<HTMLVideoElement>('.video-slide');

        const sliderNav = (manual: number) => {
            btns.forEach((btn, index) => {
                btn.classList.remove('active');
                if (index === manual) {
                    btn.classList.add('active');
                }
            });

            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (index === manual) {
                    slide.classList.add('active');
                }
            });

            contents.forEach((content, index) => {
                content.classList.remove('active');
                if (index === manual) {
                    content.classList.add('active');
                }
            });


        };

        btns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                sliderNav(i);
            });
        });

        return () => {
            btns.forEach((btn, i) => {
                btn.removeEventListener('click', () => {
                    sliderNav(i);
                });
            });
        };
    }, []);

    return (
        <div className='home  relative w-fll h-[100vh] flex flex-col justify-center lg:px-28  px-4 text-white bg-gradient-to-r from-pri to-sec '>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover active' src={v1} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v2} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v6} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v4} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v5} autoPlay muted loop></video>

            <div className='top-0 left-0 z-1 w-full h-full flex object-cover absolute bg-black/20 backdrop-brightness-75'></div>


            {/* home content */}
            <div className='content z-10 w-full sm:w-[80%] sm:mt-20  active'>
                <h1 className='text-5xl md:text-8xl  font-thin'>Never Stop</h1>
                <h1 className='text-6xl md:text-9xl font-extrabold'>Exploring</h1>
                <p className='text-[12px] md:text-lg my-5 text-gray-200'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem omnis enim blanditiis voluptatem rerum! Quos, aliquam laboriosam! Commodi, sed vitae expedita quam similique placeat, eum
                    doloremque eaque perferendis repudiandae dolorum.
                </p>
                <div className='flex justify-start items-center'>
                    <NavLink to='/' className='btn2 md:my-3 font-semibold'>
                        Read More
                    </NavLink>
                </div>
            </div>
            <div className='content z-10 w-full sm:w-[80%] sm:mt-20'>
                <h1 className='text-5xl md:text-8xl  font-thin'>Make Tour</h1>
                <h1 className='text-6xl md:text-9xl font-extrabold'>Amazing</h1>
                <p className='text-[12px] md:text-lg my-5 text-gray-200'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem omnis enim blanditiis voluptatem rerum! Quos, aliquam laboriosam! Commodi, sed vitae expedita quam similique placeat, eum
                    doloremque eaque perferendis repudiandae dolorum.
                </p>
                <div className='flex justify-start items-center'>
                    <NavLink to='/' className='btn2 md:my-3 font-semibold'>
                        Read More
                    </NavLink>
                </div>
            </div>
            <div className='content z-10 w-full sm:w-[80%] sm:mt-20'>
                <h1 className='text-5xl md:text-8xl  font-thin'>Explore The</h1>
                <h1 className='text-6xl md:text-9xl font-extrabold'>New World</h1>
                <p className='text-[12px] md:text-lg my-5 text-gray-200'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem omnis enim blanditiis voluptatem rerum! Quos, aliquam laboriosam! Commodi, sed vitae expedita quam similique placeat, eum
                    doloremque eaque perferendis repudiandae dolorum.
                </p>
                <div className='flex justify-start items-center'>
                    <NavLink to='/' className='btn2 md:my-3 font-semibold'>
                        Read More
                    </NavLink>
                </div>
            </div>

            <div className='content z-10 w-full sm:w-[80%] sm:mt-20'>
                <h1 className='text-5xl md:text-8xl  font-thin'>Dare to Dream</h1>
                <h1 className='text-6xl md:text-9xl font-extrabold'>Dare to Explore</h1>
                <p className='text-[12px] md:text-lg my-5 text-gray-200'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem omnis enim blanditiis voluptatem rerum! Quos, aliquam laboriosam! Commodi, sed vitae expedita quam similique placeat, eum
                    doloremque eaque perferendis repudiandae dolorum.
                </p>
                <div className='flex justify-start items-center'>
                    <NavLink to='/' className='btn2 md:my-3 font-semibold'>
                        Read More
                    </NavLink>
                </div>
            </div>
            <div className='content z-10 w-full sm:w-[80%] sm:mt-20'>
                <h1 className='text-5xl md:text-8xl  font-thin'>Journey Into</h1>
                <h1 className='text-6xl md:text-9xl font-extrabold'>Adventure</h1>
                <p className='text-[12px] md:text-lg my-5 text-gray-200'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem omnis enim blanditiis voluptatem rerum! Quos, aliquam laboriosam! Commodi, sed vitae expedita quam similique placeat, eum
                    doloremque eaque perferendis repudiandae dolorum.
                </p>
                <div className='flex justify-start items-center'>
                    <NavLink to='/' className='btn2 md:my-3 font-semibold'>
                        Read More
                    </NavLink>
                </div>
            </div>

            <div className='absolute right-4 hidden lg:right-28 z-10 sm:flex flex-col gap-8 md:gap-8'>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>                 
                    <BsFacebook className='lg:text-4xl xl:text-3xl  text-3xl  ' />
                </Link>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>                   
                    <BsTwitterX className='lg:text-4xl xl:text-3xl  text-3xl ' />
                </Link>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>                  
                    <BsInstagram className='lg:text-4xl xl:text-3xl  text-3xl ' />
                </Link>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>
                    <BsWhatsapp className='lg:text-4xl xl:text-3xl  text-3xl ' />
                </Link>
            </div>
            <div className=' z-20 flex-row flex gap-5 md:hidden mt-8  '>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>
                    <BsFacebook  className='text-2xl' />
                </Link>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>
                    <BsTwitterX  className='text-2xl' />
                </Link>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>
                    <BsInstagram  className='text-2xl'/>
                </Link>
                <Link to='/' className='hover:text-sec hover:scale-125 duration-300 ease-linear'>
                    <BsWhatsapp  className='text-2xl'/>
                </Link>
            </div>


            <div className='slider-navigation relative flex justify-center items-center z-20 -bottom-28  md:-bottom-10  mb-5'>
                <div className='nav-btn cursor-pointer rounded-full border-[3px] border-white hover:bg-pri active'></div>
                <div className='nav-btn cursor-pointer rounded-full border-[3px] border-white hover:bg-pri'></div>
                <div className='nav-btn cursor-pointer rounded-full border-[3px] border-white hover:bg-pri'></div>
                <div className='nav-btn cursor-pointer rounded-full border-[3px] border-white hover:bg-pri'></div>
                <div className='nav-btn cursor-pointer rounded-full border-[3px] border-white hover:bg-pri'></div>
            </div>
        </div>
    );
};

export default Home;
