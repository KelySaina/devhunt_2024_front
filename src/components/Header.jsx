import Image from '../images/Header.png'
const Header = () => {
    return (
        // <div className="grid grid-cols-2">
        //     <div className="flex flex-col justify-center space-y-8 mx-20">
        //         <div className='space-y-3'>
        //             <h1 className="text-4xl">Tongasoa</h1>
        //             <h1 className="text-4xl">Eto amin'ny </h1>
        //             <h1 className="text-4xl">CitizenConnect</h1>
        //         </div>
        //         <div className="space-y-1">
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus velit metus, non tincidunt ex lacinia vel. Pellentesque tincidunt id eros et elementum. Nunc condimentum, ligula et ornare pellentesque, lectus lectus efficitur lacus, sed ultrices urna leo nec purus. Integer vel tincidunt felis. Proin vitae risus erat. Integer laoreet ante vel augue tristique</p>
        //         </div>
        //         <div>
        //             <button className="btn btn-success text-white rounded-full hover:scale-110">Se connecter</button>
        //         </div>
        //     </div>
        //     <div className="flex justify-center items-center">
        //         <img className='w-[500px]' src={Image} />
        //     </div>
        // </div>
        <div className="overflow-hidden">
            <div className="text-center text-7xl py-6">
                <h1>Tongasoa eto amin'ny</h1>
                <h1>CitizenConnect</h1>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1">
                <div className="flex flex-col items-center space-y-10">
                    <div className="card w-40 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1>204+ </h1>
                            <h3>TEXT KELY</h3>
                        </div>
                    </div>
                    <div className="card w-40 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1> 92%</h1>
                            <h3>TEXT TSEKO</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="sm" src={Image} alt="My Image" />
                </div>
                <div className=" relative flex flex-col px-40 space-y-5">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    <button className="btn rounded-2xl text-xl">Ready</button>
                </div>
            </div>
        </div>
    )
}
export default Header; 