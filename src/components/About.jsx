import AboutImage from '../images/About.png'
const About = () => {
    return(
        <div className="grid grid-cols-2">
            <div className='flex items-center justify-center'>
                <img src={AboutImage} className='w-[500px]'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className="text-4xl ">Ireo mombamomba anay</h2>
            </div>
        </div>
    )
}
export default About;