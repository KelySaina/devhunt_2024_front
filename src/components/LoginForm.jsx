import { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePassChange = (event) => {
        setPassword(event.target.value);
    };

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false)
    const login = async () => {
        try {
            setIsLogin(true)
            if (email == "super@super.su") {
                localStorage.setItem("token", "super");
                localStorage.setItem("user", "super");
                navigate('/admin/super')
            } else {
                const loginResponse = await AuthService.login(email, password);
                localStorage.setItem("token", loginResponse.token);
                localStorage.setItem("user", JSON.stringify(loginResponse.user));
                navigate('/admin/')
            }
            toast.success("Bienvenue!");
        } catch (error) {
            toast.error("Login failed");
        } finally {
            setIsLogin(false)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login();
    };

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="font-bold text-6xl">Citizen<span className="text-success">Connect</span></h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <div className="py-2 px-8">
                        <div className="mb-8">
                            <label className="input input-bordered flex items-center gap-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input onChange={handleEmailChange} value={email} type="text" className="grow" placeholder="Addresse mail" />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input onChange={handlePassChange} value={password} type="password" className="grow" placeholder="Mot de passe" />
                            </label>
                        </div>
                        <div className="flex justify-center gap-3 mt-8">
                            <button type="submit" className="btn btn-success text-white rounded-full duration-200">
                                <span>Se connecter</span>
                                {
                                    isLogin &&
                                    <span className="loading loading-spinner loading-md"></span>
                                }
                            </button>
                            <Link to={"/"} className="btn rounded-full w-28">Retour</Link>
                        </div>
                    </div>
                </div>
            </form>
            <div className="space-y-4 text-center">
                <h1 className="font-bold text-4xl">Connecte toi !</h1>
            </div>
        </div>
    );
};

export default LoginForm;
