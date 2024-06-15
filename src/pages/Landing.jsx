import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import About from "../components/About"
import Partenaire from "../components/Partenaire";
const Landing = () => {
    return (
        <div>
            <div className="sticky top-0 bg-base-100 z-50">
                <Navbar />
            </div>
            <Header />
            <About />
            <Service />
            <Partenaire />
        </div>
    )
}
export default Landing;