import type { FC } from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Banner from '../Components/AboutComponents/Banner';

interface OtherLayoutProps { }

const OtherLayout: FC<OtherLayoutProps> = () => {
    return (
        
            <div className=' relative'>
                <Header />
                <Banner />
                <main className='mx-auto  '>
                    <div className='mx-auto dark:text-white min-h-[600px] '>
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        
    );
}

export default OtherLayout;
