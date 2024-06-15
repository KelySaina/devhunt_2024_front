import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import About from "../components/About"
import Partenaire from "../components/Partenaire";
const Landing = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Service />
            <Partenaire />
        </div>
    )
}
export default Landing;