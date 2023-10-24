import Navbar from "../top/Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div id="app-container">
      <div id="navbar-intro-container" class="h-screen">
        <div class="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
          <Navbar />
          <Introduction />
        </div>
        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default App;
