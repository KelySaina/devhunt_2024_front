const Service = () => {
    return (
        <div className="space-y-20 py-16 px-[5%] relative">
            <svg className="absolute w-2/3 opacity-25 top-0 left-0" viewBox="0 0 900 600">
                <g>
                    <g transform="translate(662 390)">
                        <path
                            d="M0 -138.2L81.3 -111.8L131.5 -42.7L131.5 42.7L81.3 111.8L0 138.2L-81.3 111.8L-131.5 42.7L-131.5 -42.7L-81.3 -111.8Z"
                            fill="none" stroke="#009473" strokeWidth="2"></path>
                    </g>
                    <g transform="translate(431 228)">
                        <path d="M0 -97L57 -78.5L92.3 -30L92.3 30L57 78.5L0 97L-57 78.5L-92.3 30L-92.3 -30L-57 -78.5Z" fill="none"
                            stroke="#009473" strokeWidth="2"></path>
                    </g>
                    <g transform="translate(811 106)">
                        <path
                            d="M0 -52L30.6 -42.1L49.5 -16.1L49.5 16.1L30.6 42.1L0 52L-30.6 42.1L-49.5 16.1L-49.5 -16.1L-30.6 -42.1Z"
                            stroke="#009473" fill="none" strokeWidth="2"></path>
                    </g>
                    <g transform="translate(179 498)">
                        <path d="M0 -85L50 -68.8L80.8 -26.3L80.8 26.3L50 68.8L0 85L-50 68.8L-80.8 26.3L-80.8 -26.3L-50 -68.8Z"
                            stroke="#009473" fill="none" strokeWidth="2"></path>
                    </g>
                </g>
            </svg>
            <h1 className="text-5xl first-letter:text-7xl my-10 text-center">Les services diponibles sur le transferts</h1>
            <div className="grid grid-cols-3 divide-x py-8 mx-20">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <svg className="w-10 stroke-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path d="M15 9.94728C14.5 9.3 13.8 8.5 12 8.5C10.2 8.5 9 9.51393 9 9.94728C9 10.3806 9.06786 10.9277 10 11.5C10.7522 11.9618 12.6684 12.0439 13.5 12.5C14.679 13.1467 14.8497 13.8202 14.8497 14.0522C14.8497 14.6837 13.4175 15.4852 12 15.5C10.536 15.5153 9.5 14.7 9 14.0522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-2xl">Impôts</h2>
                    <p className="px-9 text-center">Collecter des impôts, vérifier les déclarations fiscales, lutter contre la fraude et garantir le financement des services publics essentiels.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <svg className="w-10 stroke-success" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 9.96997H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 18.9199H11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-2xl">Carte d'identité nationale</h2>
                    <p className="px-9 text-center">Le service des cartes d'identité délivre des cartes d'identité nationales, vérifie les documents, enregistre les citoyens et gère les renouvellements.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <svg className="w-10 stroke-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-2xl">Librairie Nationale</h2>
                    <p className="px-9 text-center">Gestion des registres de la bibliothèque : inclut les titres, les auteurs, les genres et la disponibilité pour faciliter l'accès des lecteurs.</p>
                </div>
            </div>
        </div>
    )
}
export default Service;     