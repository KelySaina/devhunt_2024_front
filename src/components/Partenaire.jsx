import Fihary from '../images/fihary.jpeg'
import Giga from '../images/giga.jpeg'
import Innov from '../images/innov.jpeg'
import Code from '../images/code.jpg'
import Man from '../images/man.png'
const Partenaire = () => {
    return(
        <div className='space-y-6'>
            <h1 className="text-5xl text-center">Ireo mpiara-miasa</h1>
            <div className="grid grid-cols-5 px-20">
                <div className='flex justify-center items-center'>
                    <img className='w-24' src={Fihary}/>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-24' src={Giga}/>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-32' src={Innov}/>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-28' src={Code}/>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-36' src={Man}/>
                </div>
            </div>
        </div>
    )
}
export default Partenaire;