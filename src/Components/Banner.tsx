import type { FC } from 'react';
import { bg } from './Imports';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BannerProps { }

const Banner: FC<BannerProps> = () => {
    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,

    // };
    return (
        <div className="slider-container">

            <div className='relative  h-[400px] overflow-hidden '>
                <img src={bg} className='w-full h-full object-cover z-0' />
                <h3 className='text-6xl  absolute z-10 top-44 md:left-52 text-white'>This is slide one</h3>
            </div>


        </div>

    );
}

export default Banner;
