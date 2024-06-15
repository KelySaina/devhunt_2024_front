import Atropos from 'atropos/react';
import Image from '../images/Header.png'

const Header = () => {
    return (
        <div className="overflow-hidden -z-50">
            <Atropos
                activeOffset={25}
                shadowScale={5}
            >
                <div className="text-center text-7xl space-y-6 py-6" data-atropos-offset="-2">
                    <h1>Tongasoa eto amin'ny</h1>
                    <h1>Citizen<span className='text-success'>Connect</span></h1>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1">
                    <div className="flex flex-col items-center space-y-10">
                        <div className="card w-40 bg-base-100 shadow-xl" data-atropos-offset="5">
                            <div className="card-body">
                                <h1>204+ </h1>
                                <h3>TEXT KELY</h3>
                            </div>
                        </div>
                        <div className="card w-40 bg-base-100 shadow-xl" data-atropos-offset="-5">
                            <div className="card-body">
                                <h1> 92%</h1>
                                <h3>TEXT TSEKO</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img data-atropos-offset="5" className="w-[400px]" src={Image} alt="My Image" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className=" relative flex flex-col px-40 space-y-5">
                            <p className='text-xl first-letter:text-2xl'>
                                Faly izahay mandray anao eto amin'ny lampihazo.Tongasoa eto amintsika!
                            </p>
                        </div>
                    </div>
                </div>
            </Atropos>
        </div>
    )
}
export default Header; 