import type { FC } from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

interface OtherLayoutProps { 
   
}

const OtherLayout: FC<OtherLayoutProps> = () => {
    return (
        
            <div className=' relative'>
                <Header  />
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
