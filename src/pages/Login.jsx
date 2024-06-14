import LoginForm from "../components/LoginForm"
const Login = () => {
    return (
        <div>
            <div className="grid grid-cols-2 h-screen">
                <div className="flex justify-center items-center">
                    <LoginForm />
                </div>
                <div className="flex flex-col items-center justify-center space-y-7 bg-success">
                    <h1 className="text-4xl text-white">Hello, Friend!</h1>
                    <div className="space-y-1 text-white">
                        <p>To keep connected with us please </p>
                        <p>Login with your personal info</p>
                    </div>
                    <div>
                        <button className="btn rounded-full text-success hover:scale-110 hover:bg-white">Créer compte</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;