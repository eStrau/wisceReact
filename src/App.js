import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Home from './components/Home';

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
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
