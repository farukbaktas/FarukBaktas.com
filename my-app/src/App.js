import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Timeline } from "./components/Timeline";
import { Spotify } from "./components/Spotify";
import { Calendly } from "./components/Calendly";



  
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Timeline />
      <Projects />
      <Spotify />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
