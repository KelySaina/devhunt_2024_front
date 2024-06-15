import { Link } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

const Registration = () => {
    return (
        <div className="grid grid-cols-2 h-screen">
            <div className="flex flex-col items-center justify-center space-y-7 bg-success">
                <h1 className="text-6xl text-white font-bold">Completer les étapes</h1>
                <img src="/images/step.svg" alt="step" className="w-1/2" />
                <div className="space-y-1 text-white">
                    <p className="text-2xl">Tu as déjà un compte ?</p>
                </div>
                <div>
                    <Link to={"/login"} className="btn rounded-full text-success hover:scale-110 hover:bg-white">Se connecter</Link>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <RegistrationForm />
            </div>
        </div>
    )
}

export default Registration;