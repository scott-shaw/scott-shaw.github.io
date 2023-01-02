import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar"
import Home from "./components/home";
import Research from "./components/research";
import Experiments from "./components/experiments";

function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/research" element={<Research/>}/>
          <Route path="/experiments" element={<Experiments/>}/>
        </Routes>
      </Router>  
    );
}

export default App;
