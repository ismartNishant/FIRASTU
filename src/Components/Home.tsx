import { FC } from 'react';
import Hero from './HomeComponents/Hero';
import Adventure from './HomeComponents/Adventure';
import NewsLetter from './HomeComponents/NewsLetter';
import Services from './services/Services';



const Home: FC = () => {

    return (
        <div>
            <Hero />
            <div className='max-w-screen-xl mx-auto  py-10 px-4 relative'>
              <Adventure />
              <Services />
              <NewsLetter />
            </div>
        </div>
    );
};

export default Home;
