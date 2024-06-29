import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-[20px]">
      {/* Navbar */}
      <Navbar />
      {/* Intro */}
      <Home />
      {/* About*/}
      <About />
      {/* Skills */}
      <Skills />
      {/* Portfolio */}
      <Portfolio />
      {/* Companies */}
      <Companies />
      {/* Contact Us */}
      <Contact />
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
