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
        <div className='home  relative w-fll h-[100vh] flex flex-col justify-center md:px-28  px-4 text-white bg-gradient-to-r from-pri to-sec '>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover active' src={v1} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v2} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v6} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v4} autoPlay muted loop></video>
            <video className='video-slide absolute top-0 left-0 z-0 w-full h-full object-cover' src={v5} autoPlay muted loop></video>

            <div className='top-0 left-0 z-1 w-full h-full flex object-cover absolute bg-black/20 backdrop-brightness-75'></div>

            <div className='content z-10 flex rounded-lg md:px-4 flex-col md:flex-row md:gap-52 gap-2 justify-between items-center w-full mx-auto'>
                <div className='py-3'>
                    <h1 className='text-6xl md:text-8xl font-thin'>Never Stop</h1>
                    <h1 className='text-7xl md:text-9xl font-extrabold'>Exploring</h1>
                    <p className='text-sm md:text-lg my-5 md:my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem omnis enim blanditiis voluptatem rerum! Quos, aliquam laboriosam! Commodi, sed vitae expedita quam similique placeat, eum
                        doloremque eaque perferendis repudiandae dolorum.
                    </p>
                    <div className='flex justify-start items-center'>
                        <NavLink to='/' className='btn2 my-3 font-semibold'>
                            Read More
                        </NavLink>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col gap-8 md:gap-5 mt-8 md:mt-0'>
                    <Link to='/' className='hover:text-sec'>
                        {' '}
                        <BsFacebook size={30} />
                    </Link>
                    <Link to='/' className='hover:text-sec'>
                        {' '}
                        <BsTwitterX size={30} />
                    </Link>
                    <Link to='/' className='hover:text-sec'>
                        {' '}
                        <BsInstagram size={30} />
                    </Link>
                    <Link to='/' className='hover:text-sec'>
                        {' '}
                        <BsWhatsapp size={30} />
                    </Link>
                </div>
            </div>
            <div className='slider-navigation relative flex justify-center items-center z-20 translate-y-[80px]  mb-5'>
                <div className='nav-btn w-3 h-3 cursor-pointer rounded-full bg-white active'></div>
                <div className='nav-btn w-3 h-3 cursor-pointer rounded-full bg-white'></div>
                <div className='nav-btn w-3 h-3 cursor-pointer rounded-full bg-white'></div>
                <div className='nav-btn w-3 h-3 cursor-pointer rounded-full bg-white'></div>
                <div className='nav-btn w-3 h-3 cursor-pointer rounded-full bg-white'></div>
            </div>
        </div>
    );
};

export default Home;
