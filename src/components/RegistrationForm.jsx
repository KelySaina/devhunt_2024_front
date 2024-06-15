import { useState } from "react";
import AuthService from "../services/AuthService";
import { useRef } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const userCode = useRef();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        password: "",
        confirm_password: "",
        username: ""
    });

    const [verificationCode, setVerificationCode] = useState('');

    useEffect(() => {
        const code = generateVerificationCode();
        setVerificationCode(code);
    }, []);

    const generateVerificationCode = () => {
        const code = Math.floor(100000 + Math.random() * 900000);
        return code.toString()
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const [classReq, setClassReq] = useState('');
    const handleNextClick = () => {
        if (step == 1) {
            if (formData.firstName === "" || formData.lastName === "" || formData.dateOfBirth === "") {
                toast.error('Veuillez remplir tous les champs');
                setClassReq('text-error');
            } else {
                setClassReq('');
                setStep(step + 1);
            }
        }
    };

    const handlePreviousClick = () => {
        setStep(step - 1);
    };

    const [isVerificating, setIsVerificating] = useState(false);
    const [classReqTwo, setClassReqTwo] = useState('');
    const handleVerification = async () => {
        if (formData.email === "" || formData.password === "" || formData.confirm_password === "" || formData.username === "") {
            toast.error('Veuillez remplir tous les champs');
            setClassReqTwo('text-error');
        } else {
            setClassReqTwo('');
            if (formData.password !== formData.confirm_password) {
                toast.error('Les mots de passe ne correspondent pas');
            } else {
                try {
                    setIsVerificating(true);
                    const signUpResponse = await AuthService.signupVerify(formData.email, verificationCode);
                    console.log(`Verification code sent successfully to ${formData.email}:`, signUpResponse);
                    setStep(step + 1);
                } catch (error) {
                    toast.error('Erreur lors de l\'envoi du code de vérification ,verifier vos informations');
                } finally {
                    setIsVerificating(false);
                }
            }
        }
    };

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async () => {
        const code = userCode.current.value;
        if (code === verificationCode) {
            try {
                setIsSubmitting(true);
                const registerResponse = await AuthService.signup(formData);
                localStorage.setItem("token", registerResponse.token);
                localStorage.setItem("user", JSON.stringify(registerResponse.user));
                toast.success('Compte créé avec succès');
                navigate('/admin/');
            } catch (error) {
                toast.error('Erreur lors de la création du compte');
            } finally {
                setIsSubmitting(false);
            }
        } else {
            toast.error('Code de vérification incorrect');
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-center text-success">{`Etape - ${step}`}</h1>
            {step === 1 && (
                <div className="py-4 px-8">
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <label className={`${classReq} block text-grey-darker text-sm mb-2 font-bold`} htmlFor="firstName">Nom</label>
                            <input onChange={handleInputChange} value={formData.firstName} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="firstName" type="text" placeholder="RANAIVOSON" />
                        </div>
                        <div className="w-1/2 ml-1">
                            <label className={`${classReq} block text-grey-darker text-sm mb-2 font-bold`} htmlFor="lastName">Prénoms</label>
                            <input onChange={handleInputChange} value={formData.lastName} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="lastName" type="text" placeholder="Muriel" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className={`${classReq} block text-grey-darker text-sm mb-2 font-bold`} htmlFor="dateOfBirth">Date de naissance</label>
                        <input onChange={handleInputChange} value={formData.dateOfBirth} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="dateOfBirth" type="date" />
                    </div>
                    <div className="flex justify-end mt-8">
                        <button className="btn btn-success text-white rounded-full w-28" onClick={handleNextClick}>Suivant</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="py-4 px-8">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mb-8">
                            <label className={`${classReqTwo} block text-grey-darker text-sm mb-2 font-bold`} htmlFor="username">Pseudo</label>
                            <input onChange={handleInputChange} value={formData.username} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="MurielArii" />
                        </div>
                        <div className="mb-8">
                            <label className={`${classReqTwo} block text-grey-darker text-sm mb-2 font-bold`} htmlFor="email">Addresse mail</label>
                            <input onChange={handleInputChange} value={formData.email} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="murielarisoaran@gmail.com" />
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <label className={`${classReqTwo} block text-grey-darker text-sm mb-2 font-bold`} htmlFor="password">Mot de passe</label>
                            <input onChange={handleInputChange} value={formData.password} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" />
                        </div>
                        <div className="w-1/2 ml-1">
                            <label className={`${classReqTwo} block text-grey-darker text-sm mb-2 font-bold`} htmlFor="confirm_password">Confirmation</label>
                            <input onChange={handleInputChange} value={formData.confirm_password} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="confirm_password" type="password" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button className="btn border-success text-dark rounded-full w-28" onClick={handlePreviousClick}>Précédent</button>
                        <button className="btn btn-success text-white rounded-full" onClick={handleVerification}>
                            Suivant
                            {
                                isVerificating &&
                                <span className="loading loading-dots loading-sm"></span>
                            }
                        </button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="py-4 px-8">
                    <div className="mb-8">
                        <div className="mb-2">
                            <label className="block text-grey-darker font-bold text-2xl" htmlFor="email_final">Code de verification</label>
                            <label className="text-xs text-current">envoyée dans votre mail</label>
                        </div>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" ref={userCode} type="number" />
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="btn btn-success text-white rounded-full" onClick={handleSubmit}>
                            Finaliser
                            {
                                isSubmitting &&
                                <span className="loading loading-dots loading-sm"></span>
                            }
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
