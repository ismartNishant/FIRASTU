import type { FC } from 'react';
import { Briefcase, Mail, MapPin, PhoneCall } from 'lucide-react';

interface ContactProps { }

const Contact: FC<ContactProps> = () => {
    return (
        <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto mt-10">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="text-2xl  md:text-4xl font-medium text-sec dark:text-sec">Contact us</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-white">Chat to our friendly team</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div className='border-4 rounded-md border-sky-200 p-3'>
                            <span className="inline-block p-5 text-sec rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <Mail size={25} />
                            </span>

                            <h2 className="mt-2 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                            <p className="mt-2 text-sm text-sec dark:text-sec">firastuadventures@gmail.com</p>
                        </div>

                        <div className='border-4 rounded-md border-sky-200 p-3'>
                            <span className="inline-block p-5 text-sec rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <MapPin  size={25} />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                            <p className="mt-2 text-sm text-sec dark:text-sec">Start new chat</p>
                        </div>

                        <div className='border-4 rounded-md border-sky-200 p-3'>
                            <span className="inline-block p-5 text-sec rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <Briefcase size={25} />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                            <p className="mt-2 text-sm text-sec dark:text-sec">House No 3 rail vihar , spine road pcmc ,PUNE 411033 </p>
                        </div>

                        <div className='border-4 rounded-md border-sky-200 p-3'>
                            <span className="inline-block p-5 text-sec rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <PhoneCall size={25} />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                            <p className="mt-2 text-sm text-sec dark:text-sec">+91 7218566898 ,+91 9112294306</p>
                            <p className=" text-sm text-sec dark:text-sec"> +91 9890590116</p>
                           
                        </div>
                    </div>

                    <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-0">
                        <form>
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input type="text" placeholder="Nishant " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                    <input type="text" placeholder="Rajput" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="nishantrajputa11@gmail.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-40 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>

                            <button className="w-full mt-4 py-3  btn3 font-medium">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
