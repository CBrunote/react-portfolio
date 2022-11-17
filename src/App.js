import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { Work } from "./components/Work";
import { skillsData } from "./data/skillsData";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills props={skillsData}/>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
