import { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import { trek1 } from '../Imports';
interface Adventure_activitiesProps { }

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} relative rounded-full text-white  left-10 bottom-[25rem]` }
        style={{ ...style, display: "block", background: "#08A6FF" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className={`${className} relative rounded-full text-white   left-0` }
        style={{ ...style, display: "block", background: "#08A6FF" }}
        onClick={onClick}
      />
    );
  }

const Adventure_activities: FC<Adventure_activitiesProps> = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePrevArrow />,
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
        <div className="slider-container">
            <Slider {...settings} className=''>
                <div className='flex flex-col justify-between mx-10 w-56 '>
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
                <div className='flex flex-col justify-between mx-10 w-56  '>
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
                <div className='flex flex-col justify-between  mx-10 w-56'>
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
                <div className='flex flex-col justify-between  mx-10 w-56'>
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
                <div className='flex flex-col justify-between  mx-10 w-56 w'>
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
            </Slider>
        </div>

    );
}

export default Adventure_activities;
