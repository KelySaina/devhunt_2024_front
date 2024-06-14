import { useState } from "react";
import AuthService from "../services/AuthService";

const RegistrationForm = () => {
    const [step, setStep] = useState(1); // Track current step of the registration process

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        birthdate: "",
        email: "",
        password: "",
        confirm_password: ""
    });

    const [verificationCode, setVerificationCode] = useState('');

    const generateVerificationCode = () => {
        const code = Math.floor(100000 + Math.random() * 900000); // Generate random number between 100000 and 999999
        setVerificationCode(code.toString()); // Convert to string and set state
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleNextClick = () => {
        setStep(step + 1);
    };

    const handlePreviousClick = () => {
        setStep(step - 1);
    };

    const handleVerification = async () => {
        generateVerificationCode(); // Generate the verification code synchronously

        try {
            const signUpResponse = await AuthService.signup(formData.email, verificationCode);
            console.log(`Verification code sent successfully to ${formData.email}:`, signUpResponse);
            handleNextClick()
        } catch (error) {
            console.error(`Error sending verification code to ${formData.email}:`, error);
            // Handle error scenarios
        }
    };

    const handleSubmit = () => {
        // Handle form submission logic, e.g., send data to backend
        console.log("Form submitted with data:", formData);
    };

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-center text-success">Create Account - {`Step ${step}`}</h1>
            {step === 1 && (
                <div className="py-4 px-8">
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="first_name">Nom</label>
                            <input onChange={handleInputChange} value={formData.first_name} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="RANAIVOSON" />
                        </div>
                        <div className="w-1/2 ml-1">
                            <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="last_name">Prénoms</label>
                            <input onChange={handleInputChange} value={formData.last_name} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Muriel" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="birthdate">Date de naissance</label>
                        <input onChange={handleInputChange} value={formData.birthdate} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="birthdate" type="date" />
                    </div>
                    <div className="flex justify-end mt-8">
                        <button className="btn btn-success text-white rounded-full w-28" onClick={handleNextClick}>Suivant</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="py-4 px-8">
                    <div className="mb-8">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input onChange={handleInputChange} value={formData.email} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="murielarisoaran@gmail.com" />
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="password">Mot de passe</label>
                            <input onChange={handleInputChange} value={formData.password} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" />
                        </div>
                        <div className="w-1/2 ml-1">
                            <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="confirm_password">Confirmé mot de passe</label>
                            <input onChange={handleInputChange} value={formData.confirm_password} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="confirm_password" type="password" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button className="btn border-success text-dark rounded-full w-28" onClick={handlePreviousClick}>Précédent</button>
                        <button className="btn btn-success text-white rounded-full w-28" onClick={handleVerification}>Suivant</button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="py-4 px-8">
                    <div className="mb-8">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email_final">Code de vérification</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email_final" type="number" />
                    </div>
                    <div className="flex justify-end mt-8">
                        <button className="btn btn-success text-white rounded-full w-28" onClick={handleSubmit}>Valider</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
