import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { Work } from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
