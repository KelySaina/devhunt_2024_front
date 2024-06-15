import { useState } from "react"
import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [hoverLogin, setHoverLogin] = useState('')
    const [hoverRegister, setHoverRegister] = useState('!opacity-0')

    const handleHoverLogin = () => {
        setTimeout(() => {
            setHoverLogin('!translate-x-0')
            setHoverRegister('!opacity-0 !-z-50')
        }, 500);
    }
    const handleHoverRegister = () => {
        setTimeout(() => {
            setHoverLogin('opacity-0')
            setHoverRegister('!translate-x-0 opacity-20')
        }, 500);
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token') && localStorage.getItem('user')) {
            navigate('/admin/')
        }
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2 h-screen">
                <div onMouseEnter={handleHoverLogin} className="flex justify-center items-center relative">
                    <LoginForm />
                    <img src="/images/login.svg" className={`${hoverLogin} duration-700 transform ease-in-out object-cover w-1/2 absolute bottom-0 right-0 -z-50 opacity-30 translate-x-[100%]`} />
                </div>
                <div onMouseEnter={handleHoverRegister} className="flex flex-col items-center justify-center bg-success space-y-7 relative">
                    <h1 className="text-5xl text-white font-bold text-center">Ne possède pas encore de compte?</h1>
                    <div className="space-y-1 text-white flex justify-center">
                        <p className="w-2/3 text-center text-2xl">
                            Découvrez tous les services publics ! Connectez-vous maintenant pour simplifier vos démarches et gagner du temps.
                        </p>
                    </div>
                    <div>
                        <Link to={"/register"} className="btn rounded-full text-success hover:scale-110 hover:bg-white">Creer un compte</Link>
                        <img src="/images/regsiter.svg" className={`${hoverRegister} duration-700 transform ease-in-out object-cover w-1/2 absolute top-0 left-0 -translate-x-[100%]`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;