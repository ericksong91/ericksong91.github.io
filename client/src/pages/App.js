import Navbar from "../top/Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../top/Footer";

function App() {
  return (
    <div id="app-container">
      <Navbar />
      <div id="app-body">
        <Introduction />
        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
