import { FC } from 'react';
import Hero from './HomeComponents/Hero';
import Adventure from './HomeComponents/Adventure';
import NewsLetter from './HomeComponents/NewsLetter';



const Home: FC = () => {

    return (
        <div>
            <Hero />
            <div className='max-w-screen-xl mx-auto  py-10 px-4 relative'>
              <Adventure />
              <NewsLetter />
            </div>
        </div>
    );
};

export default Home;
