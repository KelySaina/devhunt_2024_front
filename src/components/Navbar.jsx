import { Link } from "react-router-dom";

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
                    <li><a className="text-lg m-6 group relative w-max cursor-pointer">
                        <span className="hover:text-success">Fandraisana</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                    </a></li>
                    <li><a className="text-lg m-6 group relative w-max cursor-pointer">
                        <span className="hover:text-success">Mombamomba</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                    </a></li>
                    <li><a className="text-lg m-6 group relative w-max cursor-pointer">
                        <span className="hover:text-success">Serivisy</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-success group-hover:w-3/6"></span>
                    </a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    isLogged ?
                        <Link to={"/admin"} className="btn btn-success rounded-full text-white font-bold">Iditra am kaonty</Link>
                        :
                        <Link to={"/login"} className="btn btn-success rounded-full text-white">Hisoratra anarana</Link>
                }
            </div>
        </div>
    )
}
export default Navbar;