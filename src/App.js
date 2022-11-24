import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import { skillsData } from "./data/skillsData";


function App() {
  return (
    <div className="bg-neutral-900">
      <Navbar />
      <Home/>
      <About />
      <Skills props={skillsData}/>
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
