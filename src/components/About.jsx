import AboutImage from '../images/About.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='space-y-5 py-10 px-[8%]'>
            <div className="grid grid-cols-2">
                <div className='flex items-center justify-center'>
                    <img src={AboutImage} className='w-[400px]' />
                </div>
                <div className='flex flex-col justify-center space-y-10'>
                    <h2 className="text-5xl first-letter:text-7xl text-right">A propos du plateforme</h2>
                    <p className='text-xl text-justify'>
                        <span className='text-2xl text-success'>CitizenConnect</span> regroupe tous les services publics en un seul endroit pour simplifier vos démarches administratives. <span className='font-bold text-success'>Soumettez des demandes ou suivre l'avancement de vos dossiers</span>, notre plateforme vous offre une expérience fluide et efficace. Plus besoin de naviguer entre plusieurs sites, tout ce dont vous avez besoin est à portée de main, pour vous faire gagner du temps et vous offrir une tranquillité d'esprit.
                    </p>
                    <div className="flex justify-between">
                        <div className='flex flex-col justify-center items-center gap-6' data-aos="slide-down">
                            <svg className='w-20 fill-success' viewBox="0 0 24 24">
                                <path
                                    d="M3,2H8A1,1,0,0,1,8,4H4V8A1,1,0,0,1,2,8V3A1,1,0,0,1,3,2ZM2,21a1,1,0,0,0,1,1H8a1,1,0,0,0,0-2H4V16a1,1,0,0,0-2,0Zm20,0V16a1,1,0,0,0-2,0v4H16a1,1,0,0,0,0,2h5A1,1,0,0,0,22,21ZM22,3a1,1,0,0,0-1-1H16a1,1,0,0,0,0,2h4V8a1,1,0,0,0,2,0ZM17.662,18.748a1,1,0,0,0,.088-1.411A6.627,6.627,0,0,0,12.757,15H11.244A6.626,6.626,0,0,0,6.25,17.338a1,1,0,0,0,1.5,1.324A4.651,4.651,0,0,1,11.244,17h1.513a4.653,4.653,0,0,1,3.493,1.661A1,1,0,0,0,17.662,18.748ZM16,9a4,4,0,1,1-4-4A4,4,0,0,1,16,9ZM14,9a2,2,0,1,0-2,2A2,2,0,0,0,14,9Z" />
                            </svg>
                            <label className='text-xl'>Sécuration par OCR</label>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-6' data-aos="slide-up">
                            <label className='text-xl'>Connection Rapide</label>
                            <svg className='w-20 stroke-success' viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9.31993 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32993 13.28 9.31993 13.28Z"
                                    strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.5 4H1.5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M7.5 20H1.5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M4.5 12H1.5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-6' data-aos="slide-down">
                            <svg className='w-20 stroke-success' viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M15.1289 5.43005L19.3489 6.19C19.7634 6.26246 20.1596 6.41602 20.5147 6.64178C20.8698 6.86755 21.1769 7.16113 21.4184 7.50574C21.6599 7.85035 21.8311 8.23918 21.9221 8.65002C22.0131 9.06087 22.0223 9.48566 21.9489 9.90002L20.2789 19.35C20.2076 19.7642 20.0552 20.1601 19.8305 20.5151C19.6057 20.8702 19.313 21.1773 18.9692 21.4189C18.6254 21.6605 18.2372 21.8318 17.827 21.923C17.4168 22.0141 16.9927 22.0233 16.5789 21.95L8.69891 20.5601C8.28397 20.4871 7.88751 20.333 7.53229 20.1064C7.17706 19.8799 6.87006 19.5855 6.62891 19.2401"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M11.2802 2.05006C11.6933 1.97532 12.1173 1.98313 12.5274 2.07307C12.9376 2.16302 13.3258 2.33331 13.6698 2.57411C14.0138 2.8149 14.3067 3.12144 14.5316 3.47603C14.7565 3.83061 14.909 4.22621 14.9802 4.64003L16.6501 14.1C16.7249 14.5132 16.7171 14.9372 16.6271 15.3473C16.5372 15.7575 16.3669 16.1457 16.1261 16.4897C15.8853 16.8337 15.5788 17.1266 15.2242 17.3515C14.8696 17.5764 14.474 17.7289 14.0602 17.8001L6.18015 19.19C5.34473 19.3384 4.4846 19.1489 3.78888 18.6632C3.09316 18.1775 2.61883 17.4354 2.47015 16.6L2.16016 14.82"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M2.17037 14.82C1.68722 11.9188 2.37523 8.94454 4.08331 6.55023C5.79139 4.15592 8.37988 2.53738 11.2804 2.05005V2.05005"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.09068 14.36C1.58068 10.19 6.09067 12.78 8.18067 9.76001C10.2707 6.74001 7.18069 2.76005 11.2907 2.05005"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <label className='text-xl'>Suivie de vos dossier</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About;