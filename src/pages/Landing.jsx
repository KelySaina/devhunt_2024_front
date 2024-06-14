import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import About from "../components/About"
const Landing = () => {
    return (
    <div>
       <Navbar /> 
       <Header />
       <About/>
       <Service />
    </div>
)
}
export default Landing;