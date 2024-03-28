import type { FC } from 'react';
import { bg } from '../Imports';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BannerProps { }

const Banner: FC<BannerProps> = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container overflow-hidden h-[70vh]">
            <Slider {...settings} className='w-full '>
                <div className='relative   w-full  h-full'>
                    <img src={bg} className='object-cover z-0' />
                    <h3 className='text-6xl  absolute z-10 top-44 md:left-52 text-white'>This is slide one</h3>
                </div>
                <div className='relative w-full  h-full'>
                    <img src={bg} className='object-cover z-0' />
                    <h3 className='text-6xl  absolute z-10 top-44 md:left-52 text-white'>This is slide Two</h3>
                </div>
                <div className='relative w-full  h-full'>
                    <img src={bg} className='object-cover z-0' />
                    <h3 className='text-6xl  absolute z-10 top-44 md:left-52 text-white'>This is slide three</h3>
                </div>
                <div className='relative w-full  h-full'>
                    <img src={bg} className='object-cover z-0' />
                    <h3 className='text-6xl  absolute z-10 top-44 md:left-52 text-white'>This is slide four</h3>
                </div>
            </Slider>


        </div>

    );
}

export default Banner;
