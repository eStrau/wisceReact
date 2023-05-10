// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Home from './components/pages/Home';
import DisplayProject from './components/pages/DisplayProject';

/* NOTES:
  - without using routers do this, add <Navbar/> inside of div
  - works as an entry point
  - each component is your function, like a home page
  - routing connects a specific url to specific page/component
*/

function App() {
  return (
    <div>
      <Router>
        {/*ensures navbar stays on each page*/}
        <Navbar/>
        <Routes>
          <Route path="/wisceReact/" element={<Home/>}></Route>
          <Route path="/wisceReact/projects" element={<Projects/>}></Route>
          <Route path="/wisceReact/experience" element={<Experience/>}></Route>
          <Route path="/wisceReact/displayProject/:id" element={<DisplayProject/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
