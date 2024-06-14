import Image from '../images/Header.png'
const Header = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center space-y-5 mx-16">
                <div className='space-y-1'>
                    <h1 className="text-4xl">We Collect</h1>
                    <h1 className="text-4xl">High Quality Leads</h1>
                </div>
                <div className="space-y-1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus velit metus, non tincidunt ex lacinia vel. Pellentesque tincidunt id eros et elementum. Nunc condimentum, ligula et ornare pellentesque, lectus lectus efficitur lacus, sed ultrices urna leo nec purus. Integer vel tincidunt felis. Proin vitae risus erat. Integer laoreet ante vel augue tristique</p>
                </div>
                <div>
                    <button className="btn btn-success text-white rounded-full hover:scale-110">Se connecter</button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className='w-[570px]' src={Image}/>
            </div>
        </div>
    )
}
export default Header; 