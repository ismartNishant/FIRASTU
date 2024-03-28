import type { FC } from 'react';
import { Carousel } from "flowbite-react";
import { bg } from '../Imports';
import { camp1 , trek1,trek2} from '../Imports';

interface BannerSecProps { }

const BannerSec: FC<BannerSecProps> = () => {
    return (
        <div className="h-[50vh]  xl:h-[90vh] relative about">
            <Carousel slide={false} className='' >
                <div className="flex h-full items-center justify-center  ">
                    <img src={trek2} className='rounded-none object-cover h-full xl:h-auto w-full' />
                    <div className='z-10 absolute p-5  m-auto bg-black/30 rounded-xl text-white w-full max-w-screen-xl'>
                        <h1 className='text-5xl md:text-9xl font-extrabold text-center'>About us</h1>
                    </div>
                </div>

                <div className='flex h-full items-center justify-center '>
                    <img src={camp1} className='rounded-none object-cover h-full w-full  xl:h-auto' />
                    <div className='z-10 absolute p-5  m-auto bg-black/30 rounded-xl text-white w-full max-w-screen-xl'>
                        <h1 className='text-5xl md:text-9xl font-extrabold text-center'>About us</h1>
                    </div>
                </div>
                <div className='flex h-full items-center justify-center '>
                    <img src={trek1} className='rounded-none object-cover h-full w-full xl:h-auto' />
                    <div className='z-10 absolute p-5 m-auto bg-black/30 rounded-xl text-white w-full max-w-screen-xl'>
                        <h1 className='text-5xl md:text-9xl font-extrabold text-center'>About us</h1>
                    </div>
                </div>
                <div className='flex h-full items-center justify-center '>
                    <img src={bg} className='rounded-none object-cover h-full w-full xl:h-auto' />
                    <div className='z-10 absolute p-5  m-auto bg-black/30 rounded-xl text-white w-full max-w-screen-xl'>
                        <h1 className='text-5xl md:text-9xl font-extrabold text-center'>About us</h1>
                    </div>
                </div>

            </Carousel>
        </div>

    );
}

export default BannerSec;
