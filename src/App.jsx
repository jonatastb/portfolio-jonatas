import './App.css'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import SpeedDial from './Components/SpeedDial/index'
import LanguageProvider from "./Providers/LanguageProvider";
import { Technologies } from './pages/Technologies/index';
import { Projects } from './pages/Projects/index';
import { Contact } from './pages/Contact/index';

function App() {
  return (
    <LanguageProvider>
      <Home />
      <About />  
      <Technologies />
      <Projects />
      <Contact />
      <SpeedDial />
    </LanguageProvider>
  )
}

export default App
