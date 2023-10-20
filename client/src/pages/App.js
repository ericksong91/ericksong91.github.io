import Navbar from "../top/Navbar";
import Introduction from "./Introduction";

function App() {
  return (
    <div class="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-600">
      {/* Navbar */}
      <Navbar />
      {/* Begin Introduction, with Animated Text, Profile Image and Introduction Blurb */}
      <Introduction />
    </div>
  );
}

export default App;
