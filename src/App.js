import './App.css';
import Navbar from './navbar';
import Home from './home'
import About from './about'
import Skills from './skills'
import Work from './work'
import Contact from './contact';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
              <meta charSet="utf-8" />
              <title>Muhammad Prudentio</title>
            </Helmet>
      <Navbar /> 
      <Home />
      {/* <About />
      <Skills /> */}
      <Work />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
