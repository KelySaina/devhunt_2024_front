import Image from '../images/Header.png'
const Header = () => {
    return (
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
                    <img className="w-[400px]" src={Image} alt="My Image" />
                </div>
                <div className=" relative flex flex-col px-40 space-y-5">
                    <p>
                    Faly izahay mandray anao eto amin'ny lampihazo.Tongasoa eto amintsika!
                    </p>
                    <button className="btn rounded-2xl">Hiditra</button>
                </div>
            </div>
        </div>
    )
}
export default Header; 