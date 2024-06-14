import { useState } from "react";

const RegistrationForm = () => {
    const [nextUp, setNextUp] = useState(false);
    const [nextUp2, setNextUp2] = useState(false);

    return (
        <div className="card space-y-8">
            <h1 className="text-4xl text-center">Create Account</h1>
            {
                !nextUp && !nextUp2 ? (
                    <div className="py-4 px-8">
                        <div className="flex mb-4">
                            <div className="w-1/2 mr-1">
                                <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="first_name">Nom</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="RANAIVOSON" />
                            </div>
                            <div className="w-1/2 ml-1">
                                <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="last_name">Prénoms</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Muriel" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="birthdate">Date de naissance</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="birthdate" type="date" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="nationality">Nationalité</label>
                            <select className="select select-bordered w-full" id="nationality">
                                <option>Malagasy</option>
                                <option>Français</option>
                            </select>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button className="btn btn-success text-white rounded-full w-28" onClick={() => setNextUp(true)}>Suivant</button>
                        </div>
                    </div>
                ) : nextUp && !nextUp2 ? (
                    <div className="py-4 px-8">
                        <div className="mb-8">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="murielarisoaran@gmail.com" />
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2 mr-1">
                                <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="password">Mot de passe</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" />
                            </div>
                            <div className="w-1/2 ml-1">
                                <label className="block text-grey-darker text-sm mb-2 font-bold" htmlFor="confirm_password">Confirmé mot de passe</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="confirm_password" type="password" />
                            </div>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button className="btn btn-success text-white rounded-full w-28" onClick={() => setNextUp2(true)}>Suivant</button>
                        </div>
                    </div>
                ) : (
                    <div className="py-4 px-8">
                        <div className="mb-8">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email_final">Code de vérification</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email_final" type="number" />
                        </div>
                        <div className="flex justify-end mt-8">
                            <button className="btn btn-success text-white rounded-full w-28">Valider</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default RegistrationForm;
