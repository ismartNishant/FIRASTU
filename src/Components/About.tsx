import type { FC } from 'react';
import BannerSec from './AboutComponents/BannerSec';
interface AboutProps { }

const About: FC<AboutProps> = () => {
    return (
        <div>
            <BannerSec Route="About Us" />
            <div className='max-w-screen-xl mx-auto  py-10 px-4 relative'>
                <div className='text-center'>
                    <h1 className=' text-3xl md:text-4xl font-baloo font-bold mb-5'>Our Story</h1>
                    <p className='text-md'>Welcome to Firastu Adventures community travel company! We are a team of passionate travelers
                        who are committed to providing unique and authentic travel experiences for our clients.
                        Our company was founded on the belief that travel can be a transformative experience that
                        connects people and cultures. Our goal is to create sustainable and responsible trips that
                        respect local communities and their traditions. We collaborate closely with local partners
                        to develop off-the-beaten-path itineraries that showcase the best of each destination.
                        We believe that travel should be inclusive and accessible to everyone, regardless of
                        their background or budget. Come and join us on our mission to explore the world in a
                        meaningful and responsible way!</p>
                </div>

            </div>
        </div>

    );
}

export default About;
