import Atropos from 'atropos/react';
import Image from '../images/Header.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="overflow-hidden -z-50">
            <Atropos
                activeOffset={25}
                shadowScale={5}
            >
                <div className="text-center text-7xl space-y-6 py-6" data-atropos-offset="-2" data-aos="zoom-in">
                    <h1><span className='text-success'>Bienvenue</span> sur</h1>
                    <h1>Citizen<span className='text-success'>Connect</span></h1>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1">
                    <div className="flex flex-col items-center space-y-10">
                        <div className="card w-40 bg-base-100 shadow-xl hover:shadow-success" data-atropos-offset="5">
                            <div className="card-body">
                                <div className='flex justify-end'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>
                                </div>
                                <h3 className='text-2xl text-start'>Fiable</h3>
                            </div>
                        </div>
                        <div className="card w-40 bg-base-100 shadow-xl hover:shadow-success" data-atropos-offset="-5">
                            <div className="card-body">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                </svg>
                                <h3 className='text-2xl text-right'>Rapide</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img data-aos="fade-up" data-atropos-offset="5" className="w-[400px]" src={Image} alt="My Image" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-xl first-letter:text-2xl w-2/3'>
                            Bienvenue sur notre plateforme de <span className='text-success font-bold'>services publics</span>, où votre satisfaction est notre priorité. Nous sommes ici pour vous aider et <span className='text-success font-bold'>faciliter vos démarches</span> administratives!
                        </p>
                    </div>
                </div>
            </Atropos>
        </div>
    )
}
export default Header; 