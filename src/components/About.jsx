import AboutImage from '../images/About.png'
const About = () => {
    return (
        <div className='space-y-5'>

            <div className="grid grid-cols-2">
                <div className='flex items-center justify-center'>
                    <img src={AboutImage} className='w-[500px]' />
                </div>
                <div className='flex flex-col  justify-center space-y-6'>
                    <h2 className="text-5xl">Ireo mombamomba anay</h2>
                    <p>Ny sehatra tranonkala izay manova ny fifaneraseranao amin'ny serivisy ho an'ny daholobe. Tsotra ny fomba fitantananao isan'andro, mitahiry fotoana sy angovo noho ny vahaolana tsotra sy haingana ary mahomby.</p>
                    <ul class="list-disc px-5">
                        <li>Tsotra</li>
                        <li>Hainfana</li>
                        <li>Fahombiazana</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default About;