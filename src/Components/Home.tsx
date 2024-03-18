import { FC } from 'react';
import Hero from './HomeComponents/Hero';
import Adventure_idea from './HomeComponents/Adventure-idea';

const Home: FC = () => {

    return (
        <div>
            <Hero />
            <div className='max-w-screen-xl mx-auto  py-10 px-4'>
                <Adventure_idea />
            </div>
        </div>
    );
};

export default Home;
