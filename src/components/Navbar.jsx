import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkSmooth } from 'react-scroll';

const Navbar = () => {
    const isLogged = localStorage.getItem('token') && localStorage.getItem('user')

    const changeTheme = (value) => {
        if (typeof window !== "undefined") {
            const html = document.querySelector("html")
            html?.setAttribute("data-theme", value)
            localStorage.setItem("theme", value)
            window.dispatchEvent(new Event("themeChange"))
        }
    }

    const [currentTheme, setCurrentTheme] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const theme = localStorage.getItem("theme")
            const html = document.querySelector("html")

            if (theme) {
                html?.setAttribute("data-theme", theme)
                setCurrentTheme(theme)
            } else {
                html?.setAttribute("data-theme", "light")
                setCurrentTheme("light")
            }

            const onThemeChange = () => {
                setCurrentTheme(localStorage.getItem("theme"))
            }

            window.addEventListener("themeChange", onThemeChange)

            return () => window.removeEventListener("themeChange", onThemeChange)
        }
    }, [])

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
                <a className="btn btn-ghost text-xl">
                    <svg className='w-10 fill-success' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fillRule="evenodd"
                            d="M13.75.5a2.25 2.25 0 00-1.847 3.536l-.933.934a.752.752 0 00-.11.14c-.19-.071-.396-.11-.61-.11h-2.5A1.75 1.75 0 006 6.75v.5H4.372a2.25 2.25 0 100 1.5H6v.5c0 .966.784 1.75 1.75 1.75h2.5c.214 0 .42-.039.61-.11.03.05.067.097.11.14l.933.934a2.25 2.25 0 101.24-.881L12.03 9.97a.75.75 0 00-.14-.11c.071-.19.11-.396.11-.61v-2.5c0-.214-.039-.42-.11-.61a.75.75 0 00.14-.11l1.113-1.113A2.252 2.252 0 0016 2.75 2.25 2.25 0 0013.75.5zM13 2.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM7.75 6.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-2.5zm6 6a.75.75 0 100 1.5.75.75 0 000-1.5zM1.5 8A.75.75 0 113 8a.75.75 0 01-1.5 0z"
                            clipRule="evenodd" />
                    </svg>
                    <label>Citizen<span className="text-success">Connect</span></label>
                </a>
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
            <div className="navbar-end gap-3">
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
                <div className="flex gap-3 group">
                    <svg
                        onClick={() => changeTheme("light")}
                        className={`w-6 cursor-pointer group-hover:translate-y-0 group-hover:fill-current ${currentTheme == "light" ? "!translate-y-0 fill-current" : ""} duration-700 translate-y-4`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                    </svg>
                    <svg
                        onClick={() => changeTheme("dark")}
                        className={`w-6 cursor-pointer group-hover:translate-y-0 group-hover:fill-current ${currentTheme == "dark" ? "!translate-y-0 fill-current" : ""} duration-700 translate-y-4`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Navbar;