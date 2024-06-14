import RegistrationForm from "../components/RegistrationForm";

const Registration = () => {
    return (
        <div className="grid grid-cols-2 h-screen">
            <div className="flex flex-col items-center justify-center space-y-7">
                <h1 className="text-4xl">Welcome Back!</h1>
                <div className="space-y-1">
                    <p>To keep connected with us please </p>
                    <p>Login with your personal info</p>
                </div>
                <div>
                    <button className="btn rounded-full">Se connecter</button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <RegistrationForm />
            </div>
        </div>
    )
}

export default Registration;