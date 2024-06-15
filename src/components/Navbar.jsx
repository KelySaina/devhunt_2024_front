import { Link } from "react-router-dom";
import { Link as LinkSmooth } from 'react-scroll';

const Navbar = () => {
    const isLogged = localStorage.getItem('token') && localStorage.getItem('user')
    return (
        <div className="navbar px-14 shadow-lg pb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CitizenConnect</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex px-10 text-lg">
                    <LinkSmooth to="header" smooth={true} duration={500}><a className="text-lg m-6 group relative w-max cursor-pointer">
                        <span className="hover:text-success">Acceuil</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                    </a></LinkSmooth>
                    <LinkSmooth to="about" smooth={true} duration={500}><a className="text-lg m-6 group relative w-max cursor-pointer">
                        <span className="hover:text-success">A propos</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                    </a></LinkSmooth>
                    <LinkSmooth to="service" smooth={true} duration={500}><a className="text-lg m-6 group relative w-max cursor-pointer">
                        <span className="hover:text-success">Services</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                    </a></LinkSmooth>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    isLogged ?
                        <Link to={"/admin"} className="btn btn-success rounded-full text-white font-bold">
                            Mon espace
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </Link>
                        :
                        <Link to={"/login"} className="btn btn-success rounded-full text-white">
                            Se connecter
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </Link>
                }
            </div>
        </div>
    )
}
export default Navbar;